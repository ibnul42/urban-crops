import React from "react";

const MapIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="31"
    height="30"
    viewBox="0 0 31 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <circle cx="15.5" cy="15" r="14.5" stroke="#7ACA2A" />
    <path
      d="M16 8.74902C14.2767 8.75087 12.6246 9.37241 11.4061 10.4773C10.1875 11.5822 9.50204 13.0803 9.50001 14.6428C9.49794 15.9198 9.95795 17.162 10.8095 18.1791C10.8095 18.1791 10.9867 18.3907 11.0157 18.4213L16 23.7514L20.9867 18.4186C21.0127 18.3902 21.1905 18.1791 21.1905 18.1791L21.1911 18.1775C22.0422 17.1609 22.502 15.9192 22.5 14.6428C22.498 13.0803 21.8125 11.5822 20.5939 10.4773C19.3754 9.37241 17.7233 8.75087 16 8.74902ZM16 16.786C15.5325 16.786 15.0755 16.6603 14.6868 16.4248C14.2981 16.1893 13.9952 15.8546 13.8163 15.463C13.6374 15.0714 13.5906 14.6404 13.6818 14.2247C13.773 13.809 13.9981 13.4271 14.3287 13.1274C14.6592 12.8276 15.0804 12.6235 15.5389 12.5408C15.9974 12.4581 16.4726 12.5006 16.9045 12.6628C17.3364 12.825 17.7056 13.0997 17.9653 13.4521C18.225 13.8046 18.3636 14.2189 18.3636 14.6428C18.3629 15.211 18.1136 15.7557 17.6705 16.1575C17.2274 16.5593 16.6266 16.7853 16 16.786Z"
      fill="#7ACA2A"
    />
  </svg>
);

export default MapIcon;
