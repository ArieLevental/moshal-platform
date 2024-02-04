import * as React from 'react';
const SvgIconLocation = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="#606060"
      d="M8 9a2.5 2.5 0 1 1 0-5 2.5 2.5 0 0 1 0 5m0-4a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3"
    />
    <path
      fill="#606060"
      d="m8 15-4.218-4.975-.174-.225A5.44 5.44 0 0 1 2.5 6.5a5.5 5.5 0 1 1 11 0 5.44 5.44 0 0 1-1.107 3.299l-.001.001s-.15.197-.172.223zM4.407 9.198s.116.153.143.186L8 13.455l3.455-4.075c.022-.027.139-.182.14-.183A4.45 4.45 0 0 0 12.5 6.5a4.5 4.5 0 1 0-9 0 4.45 4.45 0 0 0 .907 2.698"
    />
  </svg>
);
export default SvgIconLocation;
