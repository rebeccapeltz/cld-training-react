import React from "react";
import URLGenComponent from "../components/URLGen";

function UrlGen() {
  return (
    <div>
      <h1
        className={
          "font-medium leading-tight text-4xl mt-0 mb-2 text-white-600"
        }
      >
        URL Generate
      </h1>
      <p>
        The URL Generator is available as an npm package. It provides three
        classes that can be used to configure and generate image and video URLs
        and elements:{" "}
        <span className={"font-bold text-white"}>
          {" "}
          Cloudinary, CloudinaryImage, and CloudinaryVideo.
        </span>
      </p>
      <p>
        You need to supply your Cloudinary   <span className={"font-bold"}>cloud name</span> and an asset  <span className={"font-bold"}> public id</span> to
        instantiate an asset. Once you have an asset object, you can use url-gen
        to apply transformation functions to build image and video elements. If
        you only need the URL, you can call the toURL() function to generate
        just the URL.
      </p>
      <p>
        See how to generate URLs to use with HTML5 Image and Video Elements.
      </p>
      <URLGenComponent />
    </div>
  );
}

export default UrlGen;
