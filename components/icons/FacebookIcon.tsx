import React from "react";

const FacebookIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="36"
    height="36"
    viewBox="0 0 36 36"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M35.5 17.875C35.5 26.8301 28.7324 34.2129 20.1191 35.3066V23.2754H24.8359L25.793 17.875H20.1191V16.0293C20.1191 13.1582 21.2129 12.0645 24.084 12.0645C24.9727 12.0645 25.6562 12.1328 26.0664 12.1328V7.34766C25.3145 7.07422 23.4004 6.86914 22.3066 6.86914C16.4277 6.86914 13.7617 9.67188 13.7617 15.6191V17.875H10.1387V23.2754H13.7617V34.8965C6.10547 32.9824 0.5 26.0781 0.5 17.875C0.5 8.23633 8.29297 0.375 18 0.375C27.6387 0.375 35.5 8.23633 35.5 17.875Z"
      fill="#7ACA2A"
    />
  </svg>
);

export default FacebookIcon;
