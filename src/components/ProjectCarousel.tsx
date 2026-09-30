import { useCallback, useEffect, useId, useRef, useState } from "react";
import type { KeyboardEvent } from "react";
import { projects } from "../data/projects";

export default function ProjectCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const viewportRef = useRef<HTMLDivElement>(null);
  const slidesRef = useRef<(HTMLElement | null)[]>([]);
  const activeRef = useRef(0);
  const targetRef = useRef<number | null>(null);
  const scrollFrameRef = useRef<number | null>(null);
  const viewportId = useId();
  const instructionsId = useId();
  const active = projects[activeIndex];

  const slideOffset = useCallback((index: number) => {
    const viewport = viewportRef.current;
    const slide = slidesRef.current[index];
    if (!viewport || !slide) return 0;
    const inset = parseFloat(getComputedStyle(viewport).scrollPaddingLeft) || 0;
    return slide.getBoundingClientRect().left - viewport.getBoundingClientRect().left + viewport.scrollLeft - inset;
  }, []);

  const goTo = useCallback((index: number, immediate = false) => {
    const next = (index + projects.length) % projects.length;
    const viewport = viewportRef.current;
    if (!viewport) return;
    activeRef.current = next;
    targetRef.current = next;
    setActiveIndex(next);
    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    viewport.scrollTo({ left: slideOffset(next), behavior: immediate || reducedMotion ? "instant" : "smooth" });
  }, [slideOffset]);

  const updateFromScroll = useCallback(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    if (targetRef.current !== null) {
      if (Math.abs(viewport.scrollLeft - slideOffset(targetRef.current)) > 2) return;
      targetRef.current = null;
    }
    const nearest = projects.reduce((best, _, index) =>
      Math.abs(slideOffset(index) - viewport.scrollLeft) < Math.abs(slideOffset(best) - viewport.scrollLeft) ? index : best, 0);
    activeRef.current = nearest;
    setActiveIndex(nearest);
  }, [slideOffset]);

  useEffect(() => {
    const viewport = viewportRef.current;
    if (!viewport) return;
    const align = () => goTo(activeRef.current, true);
    const observer = new ResizeObserver(align);
    observer.observe(viewport);
    return () => {
      observer.disconnect();
      if (scrollFrameRef.current !== null) cancelAnimationFrame(scrollFrameRef.current);
    };
  }, [goTo]);

  function onKeyDown(event: KeyboardEvent<HTMLElement>) {
    const destinations: Record<string, number> = { ArrowLeft: activeRef.current - 1, ArrowRight: activeRef.current + 1, Home: 0, End: projects.length - 1 };
    if (!(event.key in destinations)) return;
    event.preventDefault();
    goTo(destinations[event.key]);
  }

  return (
    <div className="carousel" role="region" aria-roledescription="carousel" aria-label="Featured projects" onKeyDown={onKeyDown}>
      <p className="sr-only" id={instructionsId}>Swipe or scroll horizontally to explore. Use the left and right arrow keys, or choose a project below.</p>
      <div className="carousel-stage">
        <div id={viewportId} ref={viewportRef} className="carousel-viewport" tabIndex={0} role="group" aria-label="Project images" aria-describedby={instructionsId}
          onPointerDown={() => { targetRef.current = null; }} onWheel={() => { targetRef.current = null; }}
          onScroll={() => { if (scrollFrameRef.current !== null) cancelAnimationFrame(scrollFrameRef.current); scrollFrameRef.current = requestAnimationFrame(updateFromScroll); }}>
          <div className="carousel-track">
            {projects.map((project, index) => (
              <figure key={project.title} ref={(node) => { slidesRef.current[index] = node; }} className="carousel-slide" role="group" aria-roledescription="slide" aria-label={`${index + 1} of ${projects.length}: ${project.title}`}>
                <img src={project.image} srcSet={project.imageSrcSet} sizes="(max-width: 767px) calc(100vw - 64px), (max-width: 1279px) 68vw, 800px" alt={project.imageAlt} width={1600} height={900} loading="lazy" decoding="async" draggable={false} />
              </figure>
            ))}
          </div>
        </div>
        <div className="carousel-caption" aria-live="polite" aria-atomic="true">
          <h3 className={`ff-tw carousel-title${active.compact ? " carousel-title--compact" : ""}`}>{active.title}</h3>
          <p>{active.description}</p>
          <a className="project-link" href={active.href} target="_blank" rel="noopener noreferrer" aria-label={`View ${active.title} on Behance (opens in a new tab)`}>View project</a>
        </div>
      </div>
      <div className="carousel-controls">
        <nav className="carousel-indicators" aria-label="Choose a featured project">
          {projects.map((project, index) => (
            <button key={project.title} type="button" className={index === activeIndex ? "is-active" : ""} onClick={() => goTo(index)} aria-label={`Show project ${index + 1}: ${project.title}`} aria-current={index === activeIndex ? "true" : undefined} aria-controls={viewportId}><span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span></button>
          ))}
        </nav>
        <div className="carousel-arrows">
          <button type="button" aria-label="Show previous project" aria-controls={viewportId} onClick={() => goTo(activeIndex - 1)}><span aria-hidden="true">←</span></button>
          <button type="button" aria-label="Show next project" aria-controls={viewportId} onClick={() => goTo(activeIndex + 1)}><span aria-hidden="true">→</span></button>
        </div>
      </div>
    </div>
  );
}
