import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const BlobIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path
      d="M8,18 L8,17 L9,17 L9,8 L8.48652688,8 L8.48652688,7 L13,7 C14.6568542,7 16,8.34314575 16,10 C16,10.8639311 15.6348151,11.6425688 15.0503887,12.1899696 C16.1890734,12.614602 17,13.7126 17,15 C17,16.6568542 15.6568542,18 14,18 L8,18 Z M14,13 L10,13 L10,17 L14,17 C15.1045695,17 16,16.1045695 16,15 C16,13.9456382 15.1841222,13.0818349 14.1492623,13.0054857 L14,13 Z M13,8 L10,8 L10,12 L13,12 C14.1045695,12 15,11.1045695 15,10 C15,8.9456382 14.1841222,8.08183488 13.1492623,8.00548574 L13,8 Z"
      fill="#5C6165"
      fillRule="nonzero"
    ></path>
  </SvgIcon>
);

export default BlobIcon;
