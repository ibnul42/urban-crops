import React from "react";

const MessageIcon = ({ className = "" }: { className?: string }) => (
  <svg
    width="31"
    height="30"
    viewBox="0 0 31 30"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M22 12.7681L16 16.5187L10 12.7681V11.2678L16 15.0184L22 11.2678M22 9.76758H10C9.1675 9.76758 8.5 10.4352 8.5 11.2678V20.2693C8.5 20.6671 8.65804 21.0487 8.93934 21.3301C9.22064 21.6114 9.60218 21.7695 10 21.7695H22C22.3978 21.7695 22.7794 21.6114 23.0607 21.3301C23.342 21.0487 23.5 20.6671 23.5 20.2693V11.2678C23.5 10.8699 23.342 10.4883 23.0607 10.207C22.7794 9.92564 22.3978 9.76758 22 9.76758Z"
      fill="#7ACA2A"
    />
    <circle cx="15.5" cy="15" r="14.5" stroke="#7ACA2A" />
  </svg>
);

export default MessageIcon;
