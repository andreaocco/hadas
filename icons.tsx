import type { SVGProps } from "react";

const iconStyle: React.CSSProperties = {
  imageRendering: 'pixelated',
  width: '1em',
  height: '1em'
};

export const FairyIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" style={iconStyle} {...props}>
    <path d="M7 3h2v1h1v1h1v3h1V5h1V3h1v4h-1v1h-1v1h-1v1H9v1H7V9H6V8H5V7H4V3h1v3h1V5h1V3z"/>
    <path d="M2 7h1v1h1v3H3V9H2V7zm10 0h1v2h-1v2h-1V8h1V7z"/>
    <path d="M5 11v1h1v1h4v-1h1v-1H5z"/>
  </svg>
);

export const AiIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" style={iconStyle} {...props}>
    <path d="M3,2 h10 v2 H3z M5,4 h6 v1 H5z M3,6 h1 v5 H3z m9,0 h1 v5 h-1z M5,6 h2 v1 H5z m4,0 h2 v1 H9z M5,8 h2 v1 H5z m4,0 h2 v1 H9z M3,12 h10 v2 H3z M5,11 h6 v1 H5z"/>
  </svg>
);
