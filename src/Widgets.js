import React from "react";

const Widgets = () => {
  return (
    <div className="widgets">
      <iframe
        src="https://www.facebook.com/video/embed?video_id=1234567890"
        width="340"
        height="1500"
        frameborder="0"
        style={{ border: "none", overflow: "hidden" }}
        scrolling="no"
        allowTransparency="true"
        allow="encrypted-media"
      />
    </div>
  );
};

export default Widgets;
