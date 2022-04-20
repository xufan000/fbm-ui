import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const MicOffIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path
      fillRule="evenodd"
      d="M19,11 L17.3,11 C17.3,11.74 17.14,12.43 16.87,13.05 L18.1,14.28 C18.66,13.3 19,12.19 19,11 L19,11 Z M14.98,11.17 C14.98,11.11 15,11.06 15,11 L15,5 C15,3.34 13.66,2 12,2 C10.34,2 9,3.34 9,5 L9,5.18 L14.98,11.17 Z M4.27,3 L3,4.27 L9.01,10.28 L9.01,11 C9.01,12.66 10.34,14 12,14 C12.22,14 12.44,13.97 12.65,13.92 L14.31,15.58 C13.6,15.91 12.81,16.1 12,16.1 C9.24,16.1 6.7,14 6.7,11 L5,11 C5,14.41 7.72,17.23 11,17.72 L11,21 L13,21 L13,17.72 C13.91,17.59 14.77,17.27 15.54,16.82 L19.73,21 L21,19.73 L4.27,3 Z"
    />
  </SvgIcon>
);

export default MicOffIcon;
