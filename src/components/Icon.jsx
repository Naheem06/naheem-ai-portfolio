import React from "react";
const paths = {
  arrow: <path d="M7 17 17 7M7 7h10v10" />,
  "arrow-right": <path d="M4 12h16m-6-6 6 6-6 6" />,
  "arrow-up": <path d="M12 20V4m-6 6 6-6 6 6" />,
  download: <path d="M12 3v12m-5-5 5 5 5-5M4 16v5h16v-5" />,
  mail: (
    <>
      <rect x="3" y="5" width="18" height="14" rx="2" />
      <path d="m3 6 9 7 9-7" />
    </>
  ),
  phone: (
    <path d="m7 3 3 5-3 3c2 3 3 4 6 6l3-3 5 3c0 3-2 5-5 4C9 19 5 15 3 8 2 5 4 3 7 3Z" />
  ),
  github: (
    <path d="M9 19c-5 1-5-3-7-3m14 6v-4c0-1-.3-2-1-3 4-.4 6-2 6-6 0-1-.4-3-1.5-4 .4-1 .4-2 0-3 0 0-2 0-4 2a14 14 0 0 0-7 0c-2-2-4-2-4-2-.5 1-.5 2 0 3C3.5 6 3 8 3 9c0 4 2 5.6 6 6-.7 1-1 2-1 3v4" />
  ),
  linkedin: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="2" />
      <path d="M7 10v7m0-11v1m4 10v-7m0 3c0-4 6-4 6 0v4" />
    </>
  ),
  menu: <path d="M4 6h16M4 12h16M4 18h16" />,
  close: <path d="m6 6 12 12M6 18 18 6" />,
  plus: <path d="M5 12h14M12 5v14" />,
  chevron: <path d="m6 9 6 6 6-6" />,
  chat: (
    <>
      <path d="M21 11a9 9 0 0 1-9 9H4l-3 2 2-7a9 9 0 1 1 18-4Z" />
      <path d="M7 11h.01M12 11h.01M17 11h.01" />
    </>
  ),
  code: <path d="m7 7-5 5 5 5m10-10 5 5-5 5m-4-15-2 20" />,
  layers: <path d="m12 2 10 6-10 6L2 8 12 2ZM2 12l10 6 10-6M2 16l10 6 10-6" />,
  location: (
    <>
      <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 1 1 16 0Z" />
      <circle cx="12" cy="10" r="2.5" />
    </>
  ),
  check: <path d="m5 12 4 4L19 6" />,
};
export default function Icon({ name, size = 20, ...props }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      {...props}
    >
      {paths[name] || paths.arrow}
    </svg>
  );
}
