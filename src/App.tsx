import { useEffect, useState } from "react";
import PortfolioCanvas from "./components/PortfolioCanvas";
import MobilePortfolio from "./components/MobilePortfolio";

const DESIGN_WIDTH = 1440;
const DESIGN_HEIGHT = 2912;
const MOBILE_BREAKPOINT = 768;

export default function App() {
  const [scale, setScale] = useState(1);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const update = () => {
      const width = document.documentElement.clientWidth || window.innerWidth;
      setIsMobile(width < MOBILE_BREAKPOINT);
      setScale(width / DESIGN_WIDTH);
    };
    update();
    window.addEventListener("resize", update);
    window.addEventListener("orientationchange", update);
    return () => {
      window.removeEventListener("resize", update);
      window.removeEventListener("orientationchange", update);
    };
  }, []);

  if (isMobile) {
    return <MobilePortfolio />;
  }

  return (
    <div className="canvas-viewport" style={{ height: DESIGN_HEIGHT * scale }}>
      <div className="canvas" style={{ ["--canvas-scale" as string]: scale }}>
        <PortfolioCanvas />
      </div>
    </div>
  );
}
