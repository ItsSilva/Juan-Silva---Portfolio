import { act, fireEvent, render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it, vi } from "vitest";
import ProjectCarousel from "./ProjectCarousel";
import Portfolio from "./Portfolio";

function renderCarousel() {
  render(<ProjectCarousel />);
  const viewport = screen.getByRole("group", { name: "Project images" });
  const slides = screen.getAllByRole("group").filter((node) => node.getAttribute("aria-roledescription") === "slide");
  Object.defineProperty(viewport, "scrollLeft", { writable: true, value: 0 });
  vi.spyOn(viewport, "getBoundingClientRect").mockImplementation(() => ({ left: 20 } as DOMRect));
  slides.forEach((slide, index) => vi.spyOn(slide, "getBoundingClientRect").mockImplementation(() => ({ left: 20 + index * 340 - viewport.scrollLeft } as DOMRect)));
  const scrollTo = vi.fn((options: ScrollToOptions) => { viewport.scrollLeft = options.left ?? 0; });
  Object.defineProperty(viewport, "scrollTo", { value: scrollTo, configurable: true });
  return { viewport, scrollTo };
}

describe("project navigation", () => {
  it("keeps the selected image, title, description, link and indicator together", async () => {
    const user = userEvent.setup();
    const { scrollTo } = renderCarousel();
    await user.click(screen.getByRole("button", { name: "Show project 3: ¿Dónde comemos hoy?" }));
    expect(screen.getByRole("heading", { level: 3 }).textContent).toBe("¿Dónde comemos hoy?");
    expect(screen.getByRole("link").getAttribute("href")).toContain("250954473");
    expect(screen.getByRole("button", { name: "Show project 3: ¿Dónde comemos hoy?" }).getAttribute("aria-current")).toBe("true");
    expect(scrollTo).toHaveBeenLastCalledWith({ left: 680, behavior: "smooth" });
  });

  it("updates the project after native horizontal scrolling without a pagination click", async () => {
    const { viewport } = renderCarousel();
    fireEvent.pointerDown(viewport, { pointerType: "touch" });
    viewport.scrollLeft = 340;
    fireEvent.scroll(viewport);
    await act(async () => { await new Promise(requestAnimationFrame); });
    expect(screen.getByRole("heading", { level: 3 }).textContent).toBe("Lumi");
    expect(screen.getByRole("button", { name: "Show project 2: Lumi" }).getAttribute("aria-current")).toBe("true");
    expect(screen.getByRole("link").getAttribute("href")).toContain("239424711");
  });

  it("lets a swipe interrupt navigation without leaving the caption stuck", async () => {
    const user = userEvent.setup();
    const { viewport } = renderCarousel();
    await user.click(screen.getByRole("button", { name: "Show project 4: SolarApp GDO" }));
    fireEvent.pointerDown(viewport, { pointerType: "touch" });
    viewport.scrollLeft = 340;
    fireEvent.scroll(viewport);
    await act(async () => { await new Promise(requestAnimationFrame); });
    expect(screen.getByRole("heading", { level: 3 }).textContent).toBe("Lumi");
  });

  it("supports previous, next and keyboard navigation, including wrapping", async () => {
    const user = userEvent.setup();
    const { viewport } = renderCarousel();
    await user.click(screen.getByRole("button", { name: "Show previous project" }));
    expect(screen.getByRole("heading", { level: 3 }).textContent).toBe("SolarApp GDO");
    await user.click(screen.getByRole("button", { name: "Show next project" }));
    expect(screen.getByRole("heading", { level: 3 }).textContent).toBe("Bipbip");
    viewport.focus();
    await user.keyboard("{End}");
    expect(screen.getByRole("heading", { level: 3 }).textContent).toBe("SolarApp GDO");
    await user.keyboard("{Home}{ArrowRight}");
    expect(screen.getByRole("heading", { level: 3 }).textContent).toBe("Lumi");
    viewport.blur();
    fireEvent.keyDown(window, { key: "ArrowRight" });
    expect(screen.getByRole("heading", { level: 3 }).textContent).toBe("Lumi");
  });

  it("respects the reduced-motion preference", async () => {
    vi.spyOn(window, "matchMedia").mockReturnValue({ matches: true } as MediaQueryList);
    const { scrollTo } = renderCarousel();
    await userEvent.setup().click(screen.getByRole("button", { name: "Show project 2: Lumi" }));
    expect(scrollTo).toHaveBeenLastCalledWith({ left: 340, behavior: "instant" });
  });
});

it("provides a main landmark, one name heading and labelled work and contact sections", () => {
  render(<Portfolio />);
  const main = screen.getByRole("main");
  expect(within(main).getAllByRole("heading", { level: 1 })).toHaveLength(1);
  expect(screen.getByRole("link", { name: "Skip to content" }).getAttribute("href")).toBe("#main-content");
  expect(within(main).getByRole("region", { name: "A bit of my work" })).toBeTruthy();
  expect(screen.getByRole("contentinfo", { name: "Let's get in touch!" })).toBeTruthy();
});
