import { siteConfig } from "@/config";

export function Logo() {
  return (
    <svg
      aria-label={siteConfig.logo.alt}
      className="h-8 w-8 shrink-0"
      fill="none"
      role="img"
      viewBox="0 0 36 36"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        width="36"
        height="36"
        rx="8"
        className="fill-primary-container/15 stroke-primary-container/50"
        strokeWidth="1.5"
      />
      <path
        d="M18 7L27 12.2V23.8L18 29L9 23.8V12.2L18 7Z"
        className="stroke-primary-container"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M18 13L22.5 15.6V20.4L18 23L13.5 20.4V15.6L18 13Z"
        className="fill-primary-container"
      />
    </svg>
  );
}
