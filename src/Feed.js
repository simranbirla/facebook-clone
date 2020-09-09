import React, { useState, useEffect } from "react";
import StoryReel from "./StoryReel.js";
import MessageSender from "./MessageSender.js";
import Post from "./Post.js";
import db from "./firebase";
import "./Feed.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts").onSnapshot((snapshot) =>
      setPosts(snapshot.docs.map((doc) => ({ id: doc.id, data: doc.data() })))
    );
    return;
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.data.id}
          username={post.data.username}
          image={post.data.image}
          profilePic={post.data.profilePic}
          timestamp={post.data.timestamp}
          message={post.data.message}
        />
      ))}
    </div>
  );
};

export default Feed;
