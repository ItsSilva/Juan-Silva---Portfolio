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

export default function ToolsRow() {
  return (
    <div className="tools-row" role="img" aria-label="Tools I use: Premiere Pro, After Effects, Photoshop, Illustrator, Figma, TypeScript, React, Python, and Blender">
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

