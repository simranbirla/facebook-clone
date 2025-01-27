import React from "react";
import "./Story.css";
import { Avatar } from "@material-ui/core";
const Story = ({ image, profileSrc, title }) => {
  return (
    <div style={{ backgroundImage: `url(${image})` }} className="story">
      <Avatar src={profileSrc} classname="story__avatar" />
      <h4>{title}</h4>
    </div>
  );
};

export default Story;
