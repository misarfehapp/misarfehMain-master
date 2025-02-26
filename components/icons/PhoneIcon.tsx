import * as React from "react";
const PhoneIcon = (props: React.JSX.IntrinsicAttributes & React.SVGProps<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={12}
    height={12}
    fill="none"
    {...props}
  >
    <path
      stroke="#605E5E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.3}
      d="M11 8.46v1.5a1 1 0 0 1-1.09 1 9.894 9.894 0 0 1-4.315-1.535 9.75 9.75 0 0 1-3-3A9.895 9.895 0 0 1 1.06 2.09 1 1 0 0 1 2.055 1h1.5a1 1 0 0 1 1 .86c.063.48.18.951.35 1.405A1 1 0 0 1 4.68 4.32l-.635.635a8 8 0 0 0 3 3l.635-.635a1 1 0 0 1 1.055-.225c.454.17.925.287 1.405.35A1 1 0 0 1 11 8.46Z"
    />
  </svg>
);
export default PhoneIcon;
