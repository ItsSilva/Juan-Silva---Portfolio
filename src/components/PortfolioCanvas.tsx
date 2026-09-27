import { useEffect, useState } from "react";
import { projects } from "../data/projects";

const assetPathPrefix = "/assets";

// Photos / decorative art
const imgMg19431 = `${assetPathPrefix}/0f1c4.png`;
const imgPxlBitmap21 = `${assetPathPrefix}/38196.png`;
const imgYeJunhao8TcLwEpLkUnsplash1 = `${assetPathPrefix}/f483a.png`;
const imgYeJunhao8TcLwEpLkUnsplash2 = `${assetPathPrefix}/8f7ff.png`;
const imgJuanSilva1 = `${assetPathPrefix}/9265c.png`;

// Technical-tools icons (mask groups + plain frames), exactly as designed
const imgGroup = `${assetPathPrefix}/71578.svg`;
const imgGroup1 = `${assetPathPrefix}/b1c72.svg`;
const imgGroup2 = `${assetPathPrefix}/86eef.svg`;
const imgGroup3 = `${assetPathPrefix}/8398a.svg`;
const imgGroup4 = `${assetPathPrefix}/85dd8.svg`;
const imgGroup5 = `${assetPathPrefix}/ccd18.svg`;
const imgGroup6 = `${assetPathPrefix}/7b28a.svg`;
const imgFrame = `${assetPathPrefix}/ab051.svg`;
const imgGroup7 = `${assetPathPrefix}/eff1b.svg`;
const imgFrame1 = `${assetPathPrefix}/fe86a.svg`;
const imgFrame2 = `${assetPathPrefix}/92a9c.svg`;

// Contact icons
const imgFrame3 = `${assetPathPrefix}/d5b1b.svg`;
const imgFrame4 = `${assetPathPrefix}/1c746.svg`;
const imgFrame5 = `${assetPathPrefix}/5c7b0.svg`;

// Decorative vector arrows / crosses
const imgVector = `${assetPathPrefix}/1b99c.svg`;
const imgVector1 = `${assetPathPrefix}/5d4c2.svg`;
const imgVector2 = `${assetPathPrefix}/00679.svg`;
const imgVector3 = `${assetPathPrefix}/e828b.svg`;
const imgVector4 = `${assetPathPrefix}/f0302.svg`;
const imgVector5 = `${assetPathPrefix}/7d12c.svg`;
const imgVector6 = `${assetPathPrefix}/9ca16.svg`;

const STEP = 792 + 205; // card width + gap

export default function PortfolioCanvas() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState<"next" | "previous">("next");
  const active = projects[activeIndex];

  const goTo = (index: number, dir?: "next" | "previous") => {
    const normalized = (index + projects.length) % projects.length;
    setDirection(dir ?? (normalized > activeIndex ? "next" : "previous"));
    setActiveIndex(normalized);
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") goTo(activeIndex - 1, "previous");
      if (e.key === "ArrowRight") goTo(activeIndex + 1, "next");
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [activeIndex]);

  return (
    <div className="bg-[#0d0b0c] relative size-full" data-name="Portfolio - Juan Silva">
      {/* _MG_1943 photo (bottom-right, near CTA) */}
      <div className="absolute h-[697.492px] left-[calc(66.67%-17px)] top-[2360px] w-[465.052px]">
        <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgMg19431} />
      </div>

      {/* White rotated panel behind the footer */}
      <div className="absolute flex h-[1132.65px] items-center justify-center left-[-149px] top-[2576px] w-[1701.275px]">
        <div className="flex-none rotate-[4.09deg]">
          <div className="bg-[#fefefe] h-[1018.79px] relative w-[1632.77px]" />
        </div>
      </div>

      {/* ---------------------------------------------------------------- *
       * Carousel prototype (interactive)
       * ---------------------------------------------------------------- */}
      <div className="absolute bg-[#0d0b0c] flex flex-col h-[861.106px] items-start left-0 top-[1465px] w-[1440px]">
        <div className="relative h-[861.106px] w-[1440px]">
          <div className="absolute bg-[#0d0b0c] h-[634px] overflow-hidden top-1/2 -translate-y-1/2 w-[1440px]">
            <div className="absolute h-[405px] left-0 top-1/2 -translate-y-1/2 w-[1440px]">
              {/* image track */}
              <div
                className="absolute flex gap-[205px] items-start left-[223.19px] top-[21px] transition-transform duration-700 ease-[cubic-bezier(0.77,0,0.18,1)]"
                style={{ transform: `translateX(-${activeIndex * STEP}px)` }}
              >
                {projects.map((project, index) => (
                  <figure
                    key={project.title}
                    className="flex flex-col h-[362px] items-start overflow-hidden relative shrink-0 w-[792px] m-0 bg-[#aaa]"
                    aria-hidden="true"
                  >
                    <div className="h-[362px] relative shrink-0 w-full">
                      <img
                        alt=""
                        loading="lazy"
                        className="absolute inset-0 max-w-none object-cover pointer-events-none size-full"
                        src={project.image}
                      />
                    </div>
                    <div className="absolute bg-gradient-to-r from-[rgba(13,11,12,0.58)] h-[362px] left-0 to-[55%] to-[rgba(13,11,12,0.18)] top-0 w-[792px]" />
                  </figure>
                ))}
              </div>

              <p className="ff-lx absolute font-normal leading-[15.6px] left-[1235.53px] text-[#777174] text-[10.4px] top-[422px] tracking-[1.456px] uppercase whitespace-nowrap">
                Click left / right
              </p>

              {/* hit areas */}
              <button
                type="button"
                aria-label="Show previous project"
                onClick={() => goTo(activeIndex - 1, "previous")}
                className="pp-hit pp-hit--prev absolute h-[405px] left-0 top-0 w-[720px] z-[3]"
              />
              <button
                type="button"
                aria-label="Show next project"
                onClick={() => goTo(activeIndex + 1, "next")}
                className="pp-hit pp-hit--next absolute h-[405px] left-[720px] top-0 w-[720px] z-[3]"
              />

              {/* copy */}
              <div className="absolute flex flex-col gap-[10.4px] items-start left-[115px] top-[202.44px] w-[704px] z-[4] pointer-events-none">
                <div key={activeIndex} className={`pp-copy flex flex-col gap-[10.4px] items-start ${direction === "previous" ? "pp-copy--previous" : ""}`}>
                  <div className="flex flex-col items-start relative shrink-0">
                    <p
                      className="ff-tw leading-[78.72px] relative shrink-0 text-[#ff0103] tracking-[-7.68px] uppercase"
                      style={{
                        fontVariationSettings: '"XROT" 0, "YROT" 0',
                        fontSize: active.compact ? 64 : 96,
                        lineHeight: active.compact ? "56px" : "78.72px",
                        whiteSpace: active.compact ? "normal" : "nowrap",
                        maxWidth: 704,
                      }}
                    >
                      {active.title}
                    </p>
                  </div>
                  <div className="flex flex-col items-start relative shrink-0 w-[476px]">
                    <p className="ff-lx font-normal leading-[25.2px] relative shrink-0 text-[#fefefe] text-[24px] tracking-[-1.68px] w-[476px]">
                      {active.description}
                    </p>
                  </div>
                  <div className="flex flex-col items-start relative shrink-0 pointer-events-auto">
                    <a
                      href={active.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ff-lx font-normal leading-[24px] relative shrink-0 text-[#fefefe] text-[24px] tracking-[-1.68px] underline decoration-solid underline-offset-[3px] hover:text-[#ff0103] transition-colors"
                    >
                      View project
                    </a>
                  </div>
                </div>
              </div>

              {/* indicators */}
              <div className="absolute flex gap-[10.4px] h-[35.187px] items-start left-[115px] top-[419px] z-[5]">
                {projects.map((project, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <button
                      key={project.title}
                      type="button"
                      onClick={() => goTo(index, index > activeIndex ? "next" : "previous")}
                      aria-label={`Show project ${index + 1}: ${project.title}`}
                      aria-current={isActive ? "true" : undefined}
                      className={`border-solid border-t-4 flex flex-col h-full items-start justify-center pt-[7.2px] shrink-0 transition-all duration-300 ${
                        isActive ? "border-[#ff0103] w-[78px]" : "border-[#6d6669] w-[52px] hover:border-[#fefefe]"
                      }`}
                    >
                      <p className={`ff-lx font-semibold leading-[10.4px] shrink-0 text-[10.4px] whitespace-nowrap ${isActive ? "text-[#ff0103]" : "text-[#8d8689]"}`}>
                        {String(index + 1).padStart(2, "0")}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------------- *
       * Hero
       * ---------------------------------------------------------------- */}
      <div className="absolute flex h-[797.64px] items-center justify-center left-[-95px] top-[17px] w-[1485.317px]">
        <div className="flex-none rotate-[-1.56deg]">
          <div className="h-[758.056px] relative w-[1465.235px]">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <img alt="Portfolio" className="absolute h-[193.29%] left-0 max-w-none top-[-45.17%] w-full" src={imgPxlBitmap21} />
            </div>
          </div>
        </div>
      </div>

      {/* Red square outlines (about) */}
      <div className="absolute flex items-center justify-center left-[122px] size-[124.63px] top-[970.16px]">
        <div className="flex-none rotate-[178.28deg]">
          <div className="border-[#ff0103] border-[3.386px] border-solid relative size-[121.052px]" />
        </div>
      </div>
      <div className="absolute flex items-center justify-center left-[calc(50%+3.87px)] size-[128.729px] top-[1217.34px]">
        <div className="flex-none rotate-[3.76deg]">
          <div className="border-[#ff0103] border-[3.386px] border-solid relative size-[121.052px]" />
        </div>
      </div>

      {/* Layered unsplash photos behind portrait */}
      <div className="absolute flex h-[370.606px] items-center justify-center left-[calc(16.67%+84.32px)] top-[960px] w-[528.22px]">
        <div className="flex-none rotate-[3.76deg]">
          <div className="h-[338.105px] relative w-[507.158px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgYeJunhao8TcLwEpLkUnsplash1} />
          </div>
        </div>
      </div>
      <div className="absolute flex h-[350.672px] items-center justify-center left-[calc(8.33%+14.66px)] top-[970.1px] w-[513.416px]">
        <div className="-scale-y-100 flex-none rotate-[178.28deg]">
          <div className="h-[335.713px] relative w-[503.569px]">
            <img alt="" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgYeJunhao8TcLwEpLkUnsplash2} />
          </div>
        </div>
      </div>

      {/* Portrait */}
      <div className="absolute left-[calc(16.67%+25px)] size-[443px] top-[932px]">
        <img alt="Juan Silva" className="absolute inset-0 max-w-none object-cover pointer-events-none size-full" src={imgJuanSilva1} />
      </div>

      {/* Name */}
      <div className="ff-tw absolute leading-[0] left-[32px] text-[#fefefe] text-[128px] top-[1093px] tracking-[-10.24px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"XROT" 0, "YROT" 0' }}>
        <p className="leading-[0.75] mb-0">Juan</p>
        <p className="leading-[0.75] text-[#ff0103]">Silva</p>
      </div>
      <div className="-translate-y-1/2 absolute ff-lx flex flex-col font-semibold justify-center leading-[0] left-[32px] text-[#fefefe] text-[32px] top-[1320px] tracking-[-2.56px] uppercase w-[295px]">
        <p className="leading-[0.8]">Interactive Media Designer</p>
      </div>

      {/* 2026 */}
      <div className="-translate-x-1/2 -translate-y-1/2 absolute flex h-[40.685px] items-center justify-center left-[calc(83.33%+93.92px)] top-[782.16px] w-[100.124px]">
        <div className="flex-none rotate-[-1.56deg]">
          <div className="ff-lx flex flex-col font-semibold justify-center leading-[0] relative text-[#fefefe] text-[47.207px] text-center tracking-[-3.7766px] uppercase w-[99.126px]">
            <p className="leading-[0.8]">2026</p>
          </div>
        </div>
      </div>

      {/* HI! + bio + technical tools */}
      <div className="absolute flex flex-col gap-[18px] items-start left-[calc(58.33%+9px)] top-[950px] w-[563px]">
        <p className="ff-tw leading-[0] relative shrink-0 text-[#fefefe] text-[0px] tracking-[-7.68px] uppercase w-full" style={{ fontVariationSettings: '"XROT" 0, "YROT" 0' }}>
          <span className="leading-[0.75] text-[96px]">HI</span>
          <span className="leading-[0.75] text-[#ff0103] text-[96px]">!</span>
        </p>
        <div className="ff-lx flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[#fefefe] text-[24px] tracking-[-1.92px] w-full">
          <p className="leading-[0.98]">{`I'm Silva, an Interactive Media Design student at Universidad Icesi, passionate about creating intuitive digital experiences. I enjoy combining UX/UI, visual storytelling, and technology to turn complex challenges into meaningful solutions designed around people.`}</p>
        </div>
        <div className="ff-lx flex flex-col font-normal justify-center leading-[0] relative shrink-0 text-[#fefefe] text-[24px] tracking-[-1.92px] w-full">
          <p className="leading-[0.98]">{`Since 2024, I've worked in graphic design, digital content, and audiovisual support at Universidad Icesi. I use Figma and Adobe Creative Suite, with skills in React, JavaScript, and TypeScript. I bring curiosity, teamwork, and creative problem-solving to each project.`}</p>
        </div>

        {/* Technical tools I use */}
        <div className="flex gap-[30px] items-center overflow-hidden relative shrink-0 w-full" aria-label="Tools I use">
          <div className="h-[24px] overflow-hidden relative shrink-0 w-[24.9px]">
            <div className="absolute inset-[0_1.14%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[24.615px_24px]" style={{ maskImage: `url("${imgGroup}")` }}>
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
            </div>
          </div>
          <div className="h-[24px] overflow-hidden relative shrink-0 w-[24.9px]">
            <div className="absolute inset-[0_1.14%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[24.615px_24px]" style={{ maskImage: `url("${imgGroup}")` }}>
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2} />
            </div>
          </div>
          <div className="h-[24px] overflow-hidden relative shrink-0 w-[24.9px]">
            <div className="absolute inset-[0_1.14%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[24.615px_24px]" style={{ maskImage: `url("${imgGroup}")` }}>
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
            </div>
          </div>
          <div className="h-[24px] overflow-hidden relative shrink-0 w-[24.9px]">
            <div className="absolute inset-[0_1.14%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[24.615px_24px]" style={{ maskImage: `url("${imgGroup}")` }}>
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup4} />
            </div>
          </div>
          <div className="h-[24px] overflow-hidden relative shrink-0 w-[24.533px]">
            <div className="absolute h-[21.576px] left-[5.07px] overflow-hidden top-[1.33px] w-[14.564px]">
              <div className="absolute inset-[0_1.23%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[14.384px_21.576px]" style={{ maskImage: `url("${imgGroup5}")` }}>
                <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup6} />
              </div>
            </div>
          </div>
          <div className="relative shrink-0 size-[24px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
          </div>
          <div className="h-[24px] overflow-hidden relative shrink-0 w-[26.672px]">
            <div className="absolute inset-0">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup7} />
            </div>
          </div>
          <div className="relative shrink-0 size-[24px]">
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
          </div>
          <div className="h-[24px] overflow-hidden relative shrink-0 w-[22.57px]">
            <div className="absolute h-[18.066px] left-0 top-[2.88px] w-[22.56px]">
              <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame2} />
            </div>
          </div>
        </div>
      </div>

      {/* Left wanting more? */}
      <div className="-translate-y-1/2 absolute ff-tw flex flex-col justify-center leading-[0] left-[calc(20.83%-273px)] text-[#ff0103] text-[96px] top-[2397px] tracking-[-7.68px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"XROT" 0, "YROT" 0' }}>
        <p className="leading-[0.75] mb-0 text-[#fefefe]">Left wanting</p>
        <p className="leading-[0.75]">more?</p>
      </div>
      <div className="-translate-y-1/2 absolute ff-lx flex flex-col font-normal justify-center leading-[0] left-[calc(16.67%+88px)] text-[#fefefe] text-[24px] top-[2434.5px] tracking-[-1.92px] w-[609px]">
        <p className="leading-[0.8]">{`Explore more of my work to see how I approach UX/UI, visual design, and interactive experiences. Have an idea or want to co-create? Let's connect and make it happen`}</p>
      </div>

      {/* Contact rows (on white panel) */}
      <a href="mailto:juan.silva.ramirez.js@gmail.com" className="-translate-y-1/2 absolute ff-lx flex flex-col font-normal justify-center leading-[0] left-[calc(33.33%+67px)] text-[#0d0b0c] text-[24px] top-[2723.5px] tracking-[-1.92px] w-[320px] hover:text-[#ff0103] transition-colors">
        <p className="leading-[0.8]">{`juan.silva.ramirez.js@gmail.com `}</p>
      </a>
      <a href="https://www.linkedin.com/in/juanssilvar" target="_blank" rel="noopener noreferrer" className="-translate-y-1/2 absolute ff-lx flex flex-col font-normal justify-center leading-[0] left-[calc(33.33%+67px)] text-[#0d0b0c] text-[24px] top-[2774.5px] tracking-[-1.92px] w-[320px] hover:text-[#ff0103] transition-colors">
        <p className="leading-[0.8]">linkedin.com/in/juanssilvar</p>
      </a>
      <a href="https://www.behance.net/juansilva112" target="_blank" rel="noopener noreferrer" className="-translate-y-1/2 absolute ff-lx flex flex-col font-normal justify-center leading-[0] left-[calc(33.33%+67px)] text-[#0d0b0c] text-[24px] top-[2825.5px] tracking-[-1.92px] w-[320px] hover:text-[#ff0103] transition-colors">
        <p className="leading-[0.8]">{`behance.net/juansilva112 `}</p>
      </a>

      {/* More of my projects button */}
      <a
        href="https://www.behance.net/juansilva112"
        target="_blank"
        rel="noopener noreferrer"
        className="ff-tw absolute left-[calc(66.67%+6px)] top-[2363px] h-[64px] w-[442px] inline-flex items-center justify-center gap-3 bg-[#ff0103] text-[24px] uppercase leading-none text-[#fefefe] tracking-[-1.92px] transition-transform duration-200 hover:-translate-y-0.5 active:translate-y-0.5"
        style={{ fontVariationSettings: '"XROT" 0, "YROT" 0' }}
      >
        More of my projects! <span aria-hidden="true">→</span>
      </a>

      {/* Let's get in touch */}
      <div className="ff-tw absolute leading-[0] left-[32px] text-[#0d0b0c] text-[0px] top-[2705px] tracking-[-7.68px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"XROT" 0, "YROT" 0' }}>
        <p className="leading-[0.75] mb-0 text-[96px] whitespace-pre">{`Let's get `}</p>
        <p className="text-[#ff0103] text-[96px] whitespace-pre">
          <span className="leading-[0.75]">in touch</span>
          <span className="leading-[0.75]">!</span>
        </p>
      </div>

      {/* Contact icons */}
      <div className="absolute left-[calc(33.33%+19px)] size-[24px] top-[2714px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame3} />
      </div>
      <div className="absolute left-[calc(33.33%+19px)] size-[24px] top-[2763px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame4} />
      </div>
      <div className="absolute left-[calc(33.33%+19px)] size-[24px] top-[2814px]">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame5} />
      </div>

      {/* Decorative red crosses (hero) */}
      <div className="absolute flex inset-[7.55%_15.77%_80.92%_60.82%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-19.289cqw,80.711cqh)] rotate-[13.44deg] w-[hypot(80.711cqw,19.289cqh)]">
          <div className="relative size-full">
            <div className="absolute inset-[-2.34%]">
              <img alt="" className="block max-w-none size-full" src={imgVector} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[26.73%_5.66%_72.27%_92.3%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-15 flex-none h-[hypot(21.1325cqw,78.8675cqh)] w-[hypot(78.8675cqw,-21.1325cqh)]">
          <div className="relative size-full">
            <div className="absolute inset-[-16.13%]">
              <img alt="" className="block max-w-none size-full" src={imgVector1} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[87.87%_20.66%_10.92%_76.88%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="-rotate-15 flex-none h-[hypot(21.1325cqw,78.8675cqh)] w-[hypot(78.8675cqw,-21.1325cqh)]">
          <div className="relative size-full">
            <div className="absolute inset-[-16.13%]">
              <img alt="" className="block max-w-none size-full" src={imgVector2} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[87.66%_13.66%_11.16%_83.96%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-17.5086cqw,82.4914cqh)] rotate-[11.98deg] w-[hypot(82.4914cqw,17.5086cqh)]">
          <div className="relative size-full">
            <div className="absolute inset-[-16.13%]">
              <img alt="" className="block max-w-none size-full" src={imgVector3} />
            </div>
          </div>
        </div>
      </div>

      {/* Red square (work) */}
      <div className="absolute flex items-center justify-center left-[calc(25%+64.41px)] size-[148.424px] top-[1496px]">
        <div className="flex-none rotate-[-176.86deg]">
          <div className="border-[#ff0103] border-[3.942px] border-solid relative size-[140.916px]" />
        </div>
      </div>

      {/* A bit of my work */}
      <div className="-translate-y-1/2 absolute ff-tw flex flex-col justify-center leading-[0] left-[calc(50%-352px)] text-[#fefefe] text-[96px] top-[1569.02px] tracking-[-7.68px] uppercase whitespace-nowrap" style={{ fontVariationSettings: '"XROT" 0, "YROT" 0' }}>
        <p>
          <span className="leading-[0.75]">{`A bit of `}</span>
          <span className="leading-[0.75] text-[#fefefe]">my</span>
          <span className="leading-[0.75]">{` `}</span>
          <span className="leading-[0.75] text-[#ff0103]">work</span>
        </p>
      </div>

      {/* Chevron arrows near "left wanting more" */}
      <div className="absolute flex inset-[79.49%_52.93%_17.95%_41.88%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-50cqw,50cqh)] rotate-45 w-[hypot(50cqw,50cqh)]">
          <div className="relative size-full">
            <div className="absolute inset-[-7.57%]">
              <img alt="" className="block max-w-none size-full" src={imgVector4} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[79.49%_47.78%_17.95%_47.03%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-50cqw,50cqh)] rotate-45 w-[hypot(50cqw,50cqh)]">
          <div className="relative size-full">
            <div className="absolute inset-[-7.57%]">
              <img alt="" className="block max-w-none size-full" src={imgVector5} />
            </div>
          </div>
        </div>
      </div>
      <div className="absolute flex inset-[79.49%_43.12%_17.95%_51.68%] items-center justify-center" style={{ containerType: "size" }}>
        <div className="flex-none h-[hypot(-50cqw,50cqh)] rotate-45 w-[hypot(50cqw,50cqh)]">
          <div className="relative size-full">
            <div className="absolute inset-[-15.14%]">
              <img alt="" className="block max-w-none size-full" src={imgVector6} />
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="-translate-x-1/2 -translate-y-1/2 absolute ff-lx flex flex-col font-normal justify-center leading-[0] left-1/2 opacity-[0.24] text-[12px] text-black text-center top-[2900px] tracking-[-0.96px] whitespace-nowrap">
        <p className="leading-[0.98]">© 2026 Juan Silva — Interactive Media Designer.</p>
      </div>
    </div>
  );
}
