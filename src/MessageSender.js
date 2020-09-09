import React, { useState } from "react";
import { Avatar } from "@material-ui/core";
import VideocamIcon from "@material-ui/icons/Videocam";
import PhotoLibraryIcon from "@material-ui/icons/PhotoLibrary";
import InsertEmojiIcon from "@material-ui/icons/InsertEmoticon";
import { useStateValue } from "./StateProvider";
import db from "./firebase";
import firebase from "firebase";
import "./MessageSender.css";

const MessageSender = () => {
  const [{ user }, dispatch] = useStateValue();
  const [input, setInput] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    db.collection("posts").add({
      message: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp(),
      profilePic: user.photoURL,
      username: user.displayName,
      image: imageUrl,
    });
    setInput("");
    setImageUrl("");
  };

  return (
    <div className="messageSender">
      <div className="messageSender__top">
        <Avatar src={user.photoURL} />
        <form>
          <input
            type="text"
            placeholder={`What's on your mind?,${user.displayName}`}
            className="messageSender__input"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
          <input
            type="text"
            placeholder="image URL (optional)"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
          />
          <button type="submit" onClick={(e) => handleSubmit(e)}>
            Hidden Submit
          </button>
        </form>
      </div>

      <div className="messageSender__bottom">
        <div className="messageSender__optional">
          <VideocamIcon style={{ color: "red" }} />
          <h3>Live Video</h3>
        </div>
        <div className="messageSender__optional">
          <PhotoLibraryIcon style={{ color: "green" }} />
          <h3>Photos/Video</h3>
        </div>
        <div className="messageSender__optional">
          <InsertEmojiIcon style={{ color: "orange" }} />
          <h3>Feeling/Activity</h3>
        </div>
      </div>
    </div>
  );
};

export default MessageSender;
