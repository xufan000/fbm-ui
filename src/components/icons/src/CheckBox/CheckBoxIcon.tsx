import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const RadioIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <g fillRule="evenodd">
      <rect width="16" height="16" x="4" y="4" fill="#FFF" rx="2" />
      <path d="M18.1111111,19.1111111 L5.88888889,19.1111111 C5.33660414,19.1111111 4.88888889,18.6633959 4.88888889,18.1111111 L4.88888889,5.88888889 C4.88888889,5.33660414 5.33660414,4.88888889 5.88888889,4.88888889 L18.1111111,4.88888889 C18.6633959,4.88888889 19.1111111,5.33660414 19.1111111,5.88888889 L19.1111111,18.1111111 C19.1111111,18.6633959 18.6633959,19.1111111 18.1111111,19.1111111 Z M18.2222222,4 L5.77777778,4 C4.8,4 4,4.8 4,5.77777778 L4,18.2222222 C4,19.2 4.8,20 5.77777778,20 L18.2222222,20 C19.2,20 20,19.2 20,18.2222222 L20,5.77777778 C20,4.8 19.2,4 18.2222222,4 Z" />
    </g>
  </SvgIcon>
);

export default RadioIcon;
