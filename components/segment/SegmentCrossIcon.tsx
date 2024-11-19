import * as React from "react";
const SegmentCrossIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    width={65}
    height={64}
    fill="none"
    {...props}
  >
    <path fill="url(#a)" d="M.5 0h64v64H.5z" />
    <defs>
      <pattern
        id="a"
        width={1}
        height={1}
        patternContentUnits="objectBoundingBox"
      >
        <use xlinkHref="#b" transform="scale(.00063)" />
      </pattern>
      <image
        id="b"
        width={1600}
        height={1600}
      />
    </defs>
  </svg>
);
export default SegmentCrossIcon;