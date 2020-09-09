import React from "react";
import { Avatar } from "@material-ui/core";
import "./SidebarRow.css";
const SidebarRow = ({ title, src, Icon }) => {
  return (
    <div className="sidebarRow">
      {src && <Avatar src={src} />}
      {Icon && <Icon />}
      <h2>{title}</h2>
    </div>
  );
};

export default SidebarRow;
