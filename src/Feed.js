import React from "react";
import StoryReel from "./StoryReel.js";
import MessageSender from "./MessageSender.js";
import Post from "./Post.js";
import "./Feed.css";
const Feed = () => {
  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      <Post
        profilePic="https://i.pinimg.com/originals/23/92/fb/2392fb7e5f3b36bfbeca4ff575a7eca0.png"
        message="this is for testing"
        username="simran birla"
        image="https://image.shutterstock.com/image-photo/mountains-during-sunset-beautiful-natural-260nw-407021107.jpg"
      />
      <Post
        profilePic="https://media.gettyimages.com/photos/woman-lifts-her-arms-in-victory-mount-everest-national-park-picture-id507910624?s=612x612"
        message="This is the second test"
        username="Kittu"
        image="https://i.pinimg.com/originals/ca/76/0b/ca760b70976b52578da88e06973af542.jpg"
      />
      <Post
        profilePic="https://data.whicdn.com/images/300969204/original.jpg"
        message="This should be the last"
        username="Renu"
      />
    </div>
  );
};

export default Feed;
