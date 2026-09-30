import ProjectCarousel from "./ProjectCarousel";
import ToolsRow from "./ToolsRow";

const A = "/assets";
const BEHANCE = "https://www.behance.net/juansilva112";

function HeroArtwork() {
  return (
    <svg className="hero-artwork" viewBox="0 0 1440 824" role="img" aria-label="Portfolio — black and white collage with a red cross">
      <g transform="translate(647.6585 415.82) rotate(-1.56) translate(-732.6175 -379.028)">
        <svg width="1465.235" height="758.056" viewBox="0 0 1465.235 758.056" overflow="hidden">
          <image href={`${A}/cover.webp`} x="0" y="-342.4139" width="1465.235" height="1465.235" />
        </svg>
      </g>
      <g transform="translate(1044.344 389.662) rotate(13.440943)">
        <image href={`${A}/1b99c.svg`} x="-146.4605" y="-146.4605" width="292.921" height="292.921" />
      </g>
      <g className="hero-year">
        <text x="1293.92" y="782.16" textAnchor="middle" dominantBaseline="central" transform="rotate(-1.56 1293.92 782.16)" fill="#fefefe" fontFamily="Lexend, sans-serif" fontSize="47.207" fontWeight="600" letterSpacing="-3.7766">2026</text>
        <g transform="translate(1343.78 796.697) rotate(-15)">
          <image href={`${A}/5d4c2.svg`} x="-15.87105" y="-15.87105" width="31.7421" height="31.7421" />
        </g>
      </g>
    </svg>
  );
}

function ChickenArtwork() {
  return (
    <svg className="chicken-artwork" viewBox="0 0 465.0518 697.4925" aria-hidden="true">
      <image href={`${A}/chicken.webp`} width="465.0518" height="697.4925" />
      <g transform="translate(181.7476 228.7476) rotate(-15)">
        <image href={`${A}/00679.svg`} x="-19.16545" y="-19.16545" width="38.3309" height="38.3309" />
      </g>
      <g transform="translate(283.1836 222.1836) rotate(11.983058)">
        <image href={`${A}/e828b.svg`} x="-19.16545" y="-19.16545" width="38.3309" height="38.3309" />
      </g>
    </svg>
  );
}

export default function Portfolio() {
  return (
    <div className="portfolio">
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="hero section-container"><HeroArtwork /></header>
      <main id="main-content" tabIndex={-1}>
        <section className="about section-container" aria-labelledby="about-heading">
          <div className="about-visual">
            <div className="portrait-collage" aria-hidden="true">
              <img className="portrait-background portrait-background--left" src={`${A}/portrait-left.webp`} width={768} height={1024} alt="" loading="lazy" decoding="async" />
              <img className="portrait-background portrait-background--right" src={`${A}/portrait-right.webp`} width={1024} height={683} alt="" loading="lazy" decoding="async" />
              <img className="portrait-square portrait-square--left" src={`${A}/square-about-left.svg`} width={139} height={139} alt="" />
              <img className="portrait-square portrait-square--right" src={`${A}/square-about-right.svg`} width={143} height={143} alt="" />
            </div>
            <img className="portrait" src={`${A}/portrait.webp`} width={640} height={640} alt="Juan Silva" loading="lazy" decoding="async" />
            <div className="identity">
              <h1 id="about-heading" className="ff-tw"><span>Juan </span><span className="accent">Silva</span></h1>
              <p className="role">Interactive Media Designer</p>
            </div>
          </div>
          <div className="about-copy">
            <p className="about-greeting ff-tw" aria-hidden="true">Hi<span className="accent">!</span></p>
            <p>I'm Silva, an Interactive Media Design student at Universidad Icesi, passionate about creating intuitive digital experiences. I enjoy combining UX/UI, visual storytelling, and technology to turn complex challenges into meaningful solutions designed around people.</p>
            <p>Since 2024, I've worked in graphic design, digital content, and audiovisual support at Universidad Icesi. I use Figma and Adobe Creative Suite, with skills in React, JavaScript, and TypeScript. I bring curiosity, teamwork, and creative problem-solving to each project.</p>
            <ToolsRow />
          </div>
        </section>
        <section className="work section-container" aria-labelledby="work-heading">
          <div className="work-heading">
            <img className="work-square" src={`${A}/square-work.svg`} width={165} height={165} alt="" aria-hidden="true" />
            <h2 id="work-heading" className="ff-tw">A bit of my <span className="accent">work</span></h2>
          </div>
          <ProjectCarousel />
        </section>
        <section className="more section-container" aria-labelledby="more-heading">
          <div className="more-copy">
            <div className="more-heading-row">
              <h2 id="more-heading" className="ff-tw"><span>Left wanting </span><span className="accent">more?</span></h2>
              <svg className="more-arrows" viewBox="0 0 222 92" aria-hidden="true">
                <g transform="translate(38 46) rotate(45)"><image href={`${A}/f0302.svg`} x="-30.5" y="-30.5" width="61" height="61" /></g>
                <g transform="translate(109 46) rotate(45)"><image href={`${A}/7d12c.svg`} x="-30.5" y="-30.5" width="61" height="61" /></g>
                <g transform="translate(179 46) rotate(45)"><image href={`${A}/9ca16.svg`} x="-34.5" y="-34.5" width="69" height="69" /></g>
              </svg>
            </div>
            <p>Explore more of my work to see how I approach UX/UI, visual design, and interactive experiences. Have an idea or want to co-create? Let's connect and make it happen.</p>
          </div>
          <a className="more-button ff-tw" href={BEHANCE} target="_blank" rel="noopener noreferrer" aria-label="More of my projects on Behance (opens in a new tab)"><span>More of my projects!</span></a>
        </section>
      </main>
      <div className="contact-scene">
        <div className="section-container chicken-container"><ChickenArtwork /></div>
        <footer className="contact" aria-labelledby="contact-heading">
          <div className="contact-content section-container">
            <h2 id="contact-heading" className="ff-tw"><span>Let's get</span>{" "}<span className="accent">in touch!</span></h2>
            <ul className="contact-links">
              <li><a href="mailto:juan.silva.ramirez.js@gmail.com"><img src={`${A}/d5b1b.svg`} width={24} height={24} alt="" /><span>juan.silva.ramirez.js@gmail.com</span></a></li>
              <li><a href="https://www.linkedin.com/in/juanssilvar" target="_blank" rel="noopener noreferrer" aria-label="Juan Silva on LinkedIn (opens in a new tab)"><img src={`${A}/1c746.svg`} width={24} height={24} alt="" /><span>linkedin.com/in/juanssilvar</span></a></li>
              <li><a href={BEHANCE} target="_blank" rel="noopener noreferrer" aria-label="Juan Silva on Behance (opens in a new tab)"><img src={`${A}/5c7b0.svg`} width={24} height={24} alt="" /><span>behance.net/juansilva112</span></a></li>
            </ul>
          </div>
          <p className="copyright section-container">© 2026 Juan Silva — Interactive Media Designer.</p>
        </footer>
      </div>
    </div>
  );
}
