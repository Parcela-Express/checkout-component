import React from 'react';

const EloSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width={40} height={26} viewBox="0 0 40 26">
    <defs>
      <mask id="a" width={3.17} height={7.72} x={5.78} y={9.97} maskUnits="userSpaceOnUse">
        <path fill="#fff" d="M5.78 9.97v7.72h3.17V9.98H5.78z" />
      </mask>
      <mask id="b" width={6.78} height={4.59} x={9.2} y={14.41} maskUnits="userSpaceOnUse">
        <path fill="#fff" d="M9.2 19H16v-4.59H9.2V19z" />
      </mask>
    </defs>
    <path d="M0 0h40v26H0z" />
    <path
      fill="#fff"
      d="M24.84 13.85a3.27 3.27 0 1 0-5.9 2.58l3.23-1.41 1.35-.6v.01zm-5.04.94-.01-.17a1.87 1.87 0 0 1 3.27-1.23zm4.14 2.17a3.24 3.24 0 0 1-4.08.4l.77-1.18a1.9 1.9 0 0 0 2.34-.22zm1.33-.81V9.97h1.17v6.01a.12.12 0 0 0 .08.14l1.02.4-.46 1.2-1.2-.51c-.45-.2-.6-.47-.6-1.06"
    />
    <g mask="url(#a)">
      <path
        fill="#289ad3"
        d="M8.95 11.58a3.01 3.01 0 0 0 0 4.55L7.5 17.69a5.15 5.15 0 0 1 .05-7.72s1.39 1.62 1.4 1.6z"
      />
    </g>
    <g mask="url(#b)">
      <path
        fill="#ec442d"
        d="M15.98 14.82A5.15 5.15 0 0 1 9.2 18.7l.69-2.01a3.02 3.02 0 0 0 4-2.28z"
      />
    </g>
    <path
      fill="#fdda2e"
      d="m15.97 12.82-2.08.48a3.02 3.02 0 0 0-4-2.28L9.2 9.01a5.15 5.15 0 0 1 6.77 3.8"
    />
    <path
      fill="#fff"
      d="M29.52 13.15a1.85 1.85 0 0 0 0 2.8l-.89.96a3.17 3.17 0 0 1 .03-4.75l.86.98zm4.33 1.99a3.17 3.17 0 0 1-4.17 2.39l.42-1.24a1.86 1.86 0 0 0 2.47-1.4zm-.01-1.24-1.28.3a1.86 1.86 0 0 0-2.46-1.4l-.42-1.24a3.17 3.17 0 0 1 4.16 2.35"
    />
  </svg>
);

export default EloSvg;
