import * as React from "react";
const SvgIconPlus = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <g clipPath="url(#IconPlus_svg__a)">
      <path
        fill="#fff"
        d="M11 20a1 1 0 0 0 2 0v-7h7a1 1 0 0 0 0-2h-7V4a1 1 0 0 0-2 0v7H4a1 1 0 0 0 0 2h7z"
      />
    </g>
    <defs>
      <clipPath id="IconPlus_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default SvgIconPlus;
