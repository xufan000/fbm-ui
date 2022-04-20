import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const AddIcon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path d="M11,11 L11,6 C11,5.44771525 11.4477153,5 12,5 C12.5522847,5 13,5.44771525 13,6 L13,11 L13,11 L18,11 C18.5522847,11 19,11.4477153 19,12 C19,12.5522847 18.5522847,13 18,13 L13,13 L13,13 L13,18 C13,18.5522847 12.5522847,19 12,19 C11.4477153,19 11,18.5522847 11,18 L11,13 L11,13 L6,13 C5.44771525,13 5,12.5522847 5,12 C5,11.4477153 5.44771525,11 6,11 L11,11 L11,11 Z" />
  </SvgIcon>
);

export default AddIcon;
