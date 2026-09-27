import { useState } from "react";
import { projects } from "../data/projects";

export default function MobileCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const active = projects[activeIndex];

  const goTo = (index: number, dir?: "next" | "previous") => {
    const normalized = (index + projects.length) % projects.length;
    setDirection(dir ?? (normalized > activeIndex ? "next" : "previous"));
    setActiveIndex(normalized);
  };

  return (
    <div className="mcar">
      <div
        className="mcar-track"
        style={{ transform: `translateX(calc(-${activeIndex} * var(--step)))` }}
      >
        {projects.map((project) => (
          <figure className="mcar-frame" key={project.title} aria-hidden="true">
            <img src={project.image} alt="" loading="lazy" />
          </figure>
        ))}
      </div>

      <div className="mcar-copy" aria-live="polite">
        <div
          className={`mcar-copy-inner ${direction === "previous" ? "is-prev" : ""}`}
          key={activeIndex}
        >
          <h3
            className={`ff-tw ${active.compact ? "is-compact" : ""}`}
            style={{ fontVariationSettings: '"XROT" 0, "YROT" 0' }}
          >
            {active.title}
          </h3>
          <p>{active.description}</p>
          <a href={active.href} target="_blank" rel="noopener noreferrer">
            View project
          </a>
        </div>
      </div>

      <nav className="mcar-nav" aria-label="Choose a featured project">
        {projects.map((project, index) => (
          <button
            key={project.title}
            type="button"
            className={index === activeIndex ? "is-active" : ""}
            onClick={() => goTo(index, index > activeIndex ? "next" : "previous")}
            aria-label={`Show project ${index + 1}: ${project.title}`}
            aria-current={index === activeIndex ? "true" : undefined}
          >
            {String(index + 1).padStart(2, "0")}
          </button>
        ))}
      </nav>
    </div>
  );
}
