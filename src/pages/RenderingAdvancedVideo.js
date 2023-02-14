import React from "react";
import RenderingAdvancedVideo from "../components/RenderingAdvancedVideo";

function RenderingAdvancedVideoPage() {
  return (
    <div>
      <h1  className={
          "font-medium leading-tight text-4xl mt-0 mb-2 text-white-600"
        }>Advanced Video: Deliver Video Elements</h1>
      <p>All Cloudinary assets are delivered via CDN.  This is a big step in optimization. The AdvancedVideo component
        creates an HTML5 video elements.  You can include HTML5 video attributes such as control, to add controls to the video.  You only 
        need to specify a Cloudinary Cloud Name and Public ID to create an video object.  Once you have that object, you can 
        hand it off to the AdvancedVideo component to render it.  </p>
      <RenderingAdvancedVideo />
    </div>
  );
}

export default RenderingAdvancedVideoPage;
