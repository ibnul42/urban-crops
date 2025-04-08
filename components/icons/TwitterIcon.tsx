import React from "react";

const TwitterIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="32"
    height="30"
    viewBox="0 0 32 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M25.0918 0.65625H29.877L19.3496 12.7559L31.791 29.0938H22.084L14.4277 19.1816L5.74609 29.0938H0.892578L12.1719 16.2422L0.277344 0.65625H10.2578L17.0938 9.74805L25.0918 0.65625ZM23.3828 26.2227H26.0488L8.82227 3.39062H5.95117L23.3828 26.2227Z"
      fill="#7ACA2A"
    />
  </svg>
);

export default TwitterIcon;
