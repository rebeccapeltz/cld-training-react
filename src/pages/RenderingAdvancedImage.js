import React from "react";
import RenderingAdvancedImage from "../components/RenderingAdvancedImage";

function RenderingAdvancedImagePage() {
  return (
    <div>
      <h1  className={
          "font-medium leading-tight text-4xl mt-0 mb-2 text-white-600"
        }>Advanced Image: Deliver Image Elements</h1>
      <p>All Cloudinary assets are delivered via CDN.  This is a big step in optimization. The AdvancedImage component
        creates an HTML5 images elements.  You can include HTML5 image attributes such as width, height and alt.  In addition 
        we'll see how to include plugins that will provide lazy loading,  placeholders,  responsive image, and accessibility. You only 
        need to specify a Cloudinary Cloud Name and Public ID to create an image object.  Once you have that object, you can 
        hand it off to the AdvancedImage component to render it.  </p>
      <RenderingAdvancedImage />
    </div>
  );
}

export default RenderingAdvancedImagePage;
