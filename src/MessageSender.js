import React from "react";
import { Avatar } from "@material-ui/core";

const MessageSender = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar />
        <form>
          <input
            type="text"
            placeholder="What's on your mind"
            className="messageSender__input"
          />
          <input type="text" placeholder="image URL (optional)" />
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="messageSender_bottom"></div>
    </div>
  );
};

export default MessageSender;
