import React from "react";
import StoryReel from "./StoryReel.js";
import MessageSender from "./MessageSender.js";
import "./Feed.css";
const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
    </div>
  );
};

export default Feed;
