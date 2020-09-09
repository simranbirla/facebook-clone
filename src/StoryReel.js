import React from "react";
import Story from "./Story";
import "./StoryReel.css";
const StoryReel = () => {
  return (
    <div className="storyReel">
      <Story
        title="Simran Birla"
        image="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png"
        profileSrc="https://i.pinimg.com/originals/3a/74/5d/3a745d3dcba72feb73e44e399ec97bea.jpg"
      />
      <Story
        title="Lavanya"
        profileSrc="https://data.whicdn.com/images/300969204/original.jpg"
        image="https://helpx.adobe.com/content/dam/help/en/stock/how-to/visual-reverse-image-search/jcr_content/main-pars/image/visual-reverse-image-search-v2_intro.jpg"
      />
      <Story
        title="Kittu"
        profileSrc="https://i.pinimg.com/236x/3c/d7/8b/3cd78b355691af7fd8f0872d93c7fcd4.jpg"
        image="https://media.gettyimages.com/photos/woman-lifts-her-arms-in-victory-mount-everest-national-park-picture-id507910624?s=612x612"
      />
      <Story
        title="Jugni"
        profileSrc=""
        image="https://miro.medium.com/max/1200/1*mk1-6aYaf_Bes1E3Imhc0A.jpeg"
        profileSrc="https://www.dogbreedinfo.com/images21/IndianPariahsINDogsTommy.jpg"
      />
    </div>
  );
};

export default StoryReel;
