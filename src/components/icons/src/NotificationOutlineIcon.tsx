import React from "react";
import SvgIcon from "@mui/material/SvgIcon";
import type { SvgIconProps } from "@mui/material/SvgIcon";

const Icon: React.FC<SvgIconProps> = (props) => (
  <SvgIcon {...props}>
    <path fill-opacity=".86" fill-rule="evenodd" d="M9.9196,18.1441066 C9.5927,18.1441066 9.3953,18.5013113 9.5507,18.7936345 C10.0232,19.6798729 10.9402,20.2830569 12,20.2830569 C13.0605,20.2830569 13.9775,19.6798729 14.4493,18.7936345 C14.6054,18.5013113 14.408,18.1441066 14.0811,18.1441066 L9.9196,18.1441066 Z M17.6,13.4073753 L17.6,9.21931044 C17.6,6.18200092 15.3495,3.92841232 12.3738,3.73234187 C9.1111,3.51702087 6.4,6.14721683 6.4,9.42337581 L6.4,13.4073753 C6.4,13.7039764 6.2341,13.9941606 5.9583,14.0875615 C5.4018,14.2757891 5,14.8105267 5,15.4408041 C5,16.2279378 5.6272,16.866771 6.4,16.866771 L17.6,16.866771 C18.3735,16.866771 19,16.2279378 19,15.4408041 C19,14.8105267 18.5989,14.2757891 18.0424,14.0875615 C17.7666,13.9941606 17.6,13.7039764 17.6,13.4073753 Z M16,12.4599214 L16,9.54610554 C16,7.43291937 14.3925,5.86500137 12.267,5.72858677 C9.9365,5.57877873 8,7.40871859 8,9.68808255 L8,12.4599214 C8,12.5974935 8,13.3997767 8,14.866771 L16,14.866771 C16,13.3997767 16,12.5974935 16,12.4599214 Z" />
  </SvgIcon>
);

export default Icon;