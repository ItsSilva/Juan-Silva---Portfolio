import MobileCarousel from "./MobileCarousel";

const A = "/assets";

// tools icons
const imgGroup = `${A}/71578.svg`;
const imgGroup1 = `${A}/b1c72.svg`;
const imgGroup2 = `${A}/86eef.svg`;
const imgGroup3 = `${A}/8398a.svg`;
const imgGroup4 = `${A}/85dd8.svg`;
const imgGroup5 = `${A}/ccd18.svg`;
const imgGroup6 = `${A}/7b28a.svg`;
const imgFrame = `${A}/ab051.svg`;
const imgGroup7 = `${A}/eff1b.svg`;
const imgFrame1 = `${A}/fe86a.svg`;
const imgFrame2 = `${A}/92a9c.svg`;

function ToolsRow() {
  return (
    <div className="flex flex-wrap items-center gap-6" aria-label="Tools I use">
      <div className="h-6 w-[24.9px] overflow-hidden relative shrink-0">
        <div className="absolute inset-[0_1.14%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[24.615px_24px]" style={{ maskImage: `url("${imgGroup}")` }}>
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup1} />
        </div>
      </div>
      <div className="h-6 w-[24.9px] overflow-hidden relative shrink-0">
        <div className="absolute inset-[0_1.14%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[24.615px_24px]" style={{ maskImage: `url("${imgGroup}")` }}>
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup2} />
        </div>
      </div>
      <div className="h-6 w-[24.9px] overflow-hidden relative shrink-0">
        <div className="absolute inset-[0_1.14%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[24.615px_24px]" style={{ maskImage: `url("${imgGroup}")` }}>
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup3} />
        </div>
      </div>
      <div className="h-6 w-[24.9px] overflow-hidden relative shrink-0">
        <div className="absolute inset-[0_1.14%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[24.615px_24px]" style={{ maskImage: `url("${imgGroup}")` }}>
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup4} />
        </div>
      </div>
      <div className="h-6 w-[24.533px] overflow-hidden relative shrink-0">
        <div className="absolute h-[21.576px] left-[5.07px] overflow-hidden top-[1.33px] w-[14.564px]">
          <div className="absolute inset-[0_1.23%_0_0] mask-alpha mask-intersect mask-no-clip mask-no-repeat mask-size-[14.384px_21.576px]" style={{ maskImage: `url("${imgGroup5}")` }}>
            <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup6} />
          </div>
        </div>
      </div>
      <div className="relative shrink-0 size-6">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame} />
      </div>
      <div className="h-6 w-[26.672px] overflow-hidden relative shrink-0">
        <div className="absolute inset-0">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgGroup7} />
        </div>
      </div>
      <div className="relative shrink-0 size-6">
        <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame1} />
      </div>
      <div className="h-6 w-[22.57px] overflow-hidden relative shrink-0">
        <div className="absolute h-[18.066px] left-0 top-[2.88px] w-[22.56px]">
          <img alt="" className="absolute block inset-0 max-w-none size-full" src={imgFrame2} />
        </div>
      </div>
    </div>
  );
}

export default function MobilePortfolio() {
  return (
    <div className="w-full bg-[#0d0b0c] text-[#fefefe] overflow-hidden">
      {/* ---------------- Hero ---------------- */}
      <header className="px-5 pt-10 pb-0">
        <div className="relative">
          <img src={`${A}/38196.png`} alt="Portfolio" className="w-full -rotate-[1.5deg] select-none" draggable={false} />
          <svg viewBox="0 0 100 100" className="absolute right-[6%] top-[24%] w-[22vw] max-w-[130px] rotate-[8deg]" fill="none" aria-hidden="true">
            <line x1="16" y1="16" x2="84" y2="84" stroke="#ff0103" strokeWidth="18" strokeLinecap="square" />
            <line x1="84" y1="16" x2="16" y2="84" stroke="#ff0103" strokeWidth="18" strokeLinecap="square" />
          </svg>
        </div>
      </header>

      {/* ---------------- About ---------------- */}
      <section className="px-5 pt-2 pb-10" aria-label="About Juan Silva">
        {/* Media (image + decorations) on top */}
        <div className="relative mx-auto w-[80%] max-w-[360px]">
          <img
            src={`${A}/8f7ff.png`}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -left-5 top-5 w-[70%] -rotate-2 opacity-60 grayscale"
            draggable={false}
          />
          <img
            src={`${A}/f483a.png`}
            alt=""
            aria-hidden="true"
            className="pointer-events-none absolute -right-6 bottom-2 w-[62%] rotate-3 opacity-60 grayscale"
            draggable={false}
          />
          <span className="absolute -left-3 top-1/2 z-20 size-20 -translate-y-1/2 rotate-[178deg] border-[3.4px] border-solid border-[#ff0103]" />
          <span className="absolute -right-4 bottom-4 z-20 size-20 rotate-3 border-[3.4px] border-solid border-[#ff0103]" />
          <div className="relative z-10 aspect-square w-full overflow-hidden">
            <img src={`${A}/9265c.png`} alt="Juan Silva" className="size-full object-cover" draggable={false} />
          </div>
        </div>

        {/* Name */}
        <h1 className="ff-tw mt-10 text-[19vw] leading-[0.75] uppercase" style={{ fontVariationSettings: '"XROT" 0, "YROT" 0', letterSpacing: "-0.08em" }}>
          <span className="block">Juan</span>
          <span className="block text-[#ff0103]">Silva</span>
        </h1>
        <p className="ff-lx mt-2 text-[6vw] font-semibold uppercase leading-[0.85]" style={{ letterSpacing: "-0.06em" }}>
          Interactive Media Designer
        </p>

        {/* Bio */}
        <div className="ff-lx mt-10 space-y-5 text-[4.6vw] leading-[1.05]" style={{ letterSpacing: "-0.04em" }}>
          <p>{`I'm Silva, an Interactive Media Design student at Universidad Icesi, passionate about creating intuitive digital experiences. I enjoy combining UX/UI, visual storytelling, and technology to turn complex challenges into meaningful solutions designed around people.`}</p>
          <p>{`Since 2024, I've worked in graphic design, digital content, and audiovisual support at Universidad Icesi. I use Figma and Adobe Creative Suite, with skills in React, JavaScript, and TypeScript. I bring curiosity, teamwork, and creative problem-solving to each project.`}</p>
        </div>
        <div className="mt-7">
          <ToolsRow />
        </div>
      </section>

      {/* ---------------- Work ---------------- */}
      <section className="px-5 py-10" aria-label="Selected work">
        <div className="relative mb-8">
          <span className="absolute -top-3 left-2 size-24 -rotate-[177deg] border-[3.4px] border-solid border-[#ff0103]" />
          <h2 className="ff-tw relative text-[13vw] leading-[0.8] uppercase" style={{ fontVariationSettings: '"XROT" 0, "YROT" 0', letterSpacing: "-0.07em" }}>
            A bit of my <span className="text-[#ff0103]">work</span>
          </h2>
          <svg viewBox="0 0 100 100" className="absolute -top-4 right-3 w-12 rotate-6" fill="none" aria-hidden="true">
            <line x1="16" y1="16" x2="84" y2="84" stroke="#ff0103" strokeWidth="16" strokeLinecap="square" />
            <line x1="84" y1="16" x2="16" y2="84" stroke="#ff0103" strokeWidth="16" strokeLinecap="square" />
          </svg>
        </div>
        <MobileCarousel />
      </section>

      {/* ---------------- Left wanting more ---------------- */}
      <section className="px-5 pt-10 pb-16" aria-label="More projects">
        <h2 className="ff-tw text-[13vw] leading-[0.78] uppercase" style={{ fontVariationSettings: '"XROT" 0, "YROT" 0', letterSpacing: "-0.07em" }}>
          <span className="block">Left wanting</span>
          <span className="block text-[#ff0103]">more?</span>
        </h2>
        <div className="mt-5 flex items-center gap-4">
          <p className="ff-lx max-w-[34ch] text-[4.6vw] leading-[0.95]" style={{ letterSpacing: "-0.04em" }}>
            {`Explore more of my work to see how I approach UX/UI, visual design, and interactive experiences. Have an idea or want to co-create? Let's connect and make it happen`}
          </p>
          <svg viewBox="0 0 120 40" className="hidden h-7 w-24 shrink-0 sm:block" fill="none" aria-hidden="true">
            {[0, 32, 64].map((x) => (
              <polyline key={x} points={`${x + 6},8 ${x + 26},20 ${x + 6},32`} stroke="#ff0103" strokeWidth="7" strokeLinecap="square" />
            ))}
          </svg>
        </div>
        <a
          href="https://www.behance.net/juansilva112"
          target="_blank"
          rel="noopener noreferrer"
          className="ff-tw mt-7 inline-flex items-center gap-3 bg-[#ff0103] px-7 py-4 text-[5vw] uppercase leading-none text-[#fefefe] transition-transform duration-200 active:translate-y-0.5"
          style={{ fontVariationSettings: '"XROT" 0, "YROT" 0', letterSpacing: "-0.04em" }}
        >
          More of my projects! <span aria-hidden="true">→</span>
        </a>
      </section>

      {/* ---------------- Footer (white panel) + chicken ---------------- */}
      <footer className="relative isolate -rotate-[4deg] origin-top-left" style={{ marginBottom: "-6vw" }}>
        <div className="relative -mt-6 w-[112%] -translate-x-[6%] bg-[#fefefe] pb-16 pt-16 text-[#0d0b0c]">
          <div className="rotate-[4deg] px-5">
            <h2 className="ff-tw text-[13vw] leading-[0.78] uppercase" style={{ fontVariationSettings: '"XROT" 0, "YROT" 0', letterSpacing: "-0.07em" }}>
              <span className="block">Let&apos;s get</span>
              <span className="block text-[#ff0103]">in touch!</span>
            </h2>

            <ul className="mt-6 flex flex-col gap-4">
              <li>
                <a href="mailto:juan.silva.ramirez.js@gmail.com" className="ff-lx flex items-center gap-4 text-[4.4vw] leading-none tracking-tight text-[#0d0b0c] transition-colors hover:text-[#ff0103]">
                  <img src={`${A}/d5b1b.svg`} alt="" aria-hidden="true" className="size-6 shrink-0" />
                  <span className="break-all">juan.silva.ramirez.js@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="https://www.linkedin.com/in/juanssilvar" target="_blank" rel="noopener noreferrer" className="ff-lx flex items-center gap-4 text-[4.4vw] leading-none tracking-tight text-[#0d0b0c] transition-colors hover:text-[#ff0103]">
                  <img src={`${A}/1c746.svg`} alt="" aria-hidden="true" className="size-6 shrink-0" />
                  <span>linkedin.com/in/juanssilvar</span>
                </a>
              </li>
              <li>
                <a href="https://www.behance.net/juansilva112" target="_blank" rel="noopener noreferrer" className="ff-lx flex items-center gap-4 text-[4.4vw] leading-none tracking-tight text-[#0d0b0c] transition-colors hover:text-[#ff0103]">
                  <img src={`${A}/5c7b0.svg`} alt="" aria-hidden="true" className="size-6 shrink-0" />
                  <span>behance.net/juansilva112</span>
                </a>
              </li>
            </ul>

            <p className="ff-lx mt-10 text-xs text-black/25">© 2026 Juan Silva — Interactive Media Designer.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
