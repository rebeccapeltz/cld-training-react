import "../App.css";
import { Sandpack } from "@codesandbox/sandpack-react";

const cloudinaryImageURLs = `import {Cloudinary,CloudinaryImage} from "@cloudinary/url-gen";
export default function App() {
  // instantiate Cloudinary and call it's image function
  // use toURL() to create a URL and use it in an HTML image element
  const cld = new Cloudinary({cloud: {cloudName: 'demo'}}); 
  const cldImage = cld.image('cld-sample');
  const cldURL = cldImage.toURL();

  // instantiate CloudinaryImage
  // use toURL() to create a URL and use it in an HTML image element
  const cloudinaryImage = new CloudinaryImage("cld-sample", { cloudName: "demo" })
  cloudinaryImageURL = cloudinaryImage.toURL();

  return (
    <div>
    <p>cldImage:<br/> <a target="_blank" href={cldURL}>{cldURL}</a></p>
    <img height="250px" width="auto" src={cldURL} />
    <p>cloudinaryImage:<br/> <a target="_blank" href={cloudinaryImageURL}>{cloudinaryImageURL}</a></p>
    <img height="250px" width="auto" src={cloudinaryImageURL} />
    </div>
  )
}`;

const cloudinaryVideoURLs = `import {Cloudinary,CloudinaryVideo} from "@cloudinary/url-gen";
export default function App() {
  // instantiate Cloudinary and call it's video function
  // use toURL() to create a URL and use it in an HTML video element
  const cld = new Cloudinary({cloud: {cloudName: 'picturecloud7'}}); 
  const cldVideo = cld.video('hike-up');

  // instantiate CloudinaryVideo
  // use toURL() to create a URL and use it in an HTML image element
  const cloudinaryVideo = new CloudinaryVideo("hike-up", { cloudName: "picturecloud7" })
  const cloudinaryVideoURL = cloudinaryVideo.toURL(); 
  return (
    <div>
    <p>cldVideo:<br/> <a target="_blank" href={cloudinaryVideoURL}>{cloudinaryVideoURL}</a></p>
    <video controls height="250px" width="auto" > 
        <source src={cloudinaryVideoURL} type="video/mp4" />
    </video>
    <p>cloudinaryVideo:<br/> <a target="_blank" href={cloudinaryVideoURL}>{cloudinaryVideo.toURL()}</a></p>
    <video controls height="250px" width="auto"> 
        <source src={cloudinaryVideoURL} type="video/mp4" />
    </video>
    </div>
  )
}`;

export default function URLGenComponent() {
  return (
    <div className="code-container">
      <h3
        className={
          "font-sans font-medium leading-tight text-3xl mt-0 mb-2 text-white"
        }
      >
        Image URL Generator
      </h3>
      <p className={"font-sans mt-1 mb-1 text-white"}>
        The URL Generator is available as an npm package. It provides three
        classes that can be used to configure and generate image and video URLs
        and elements:{" "}
        <span className={"font-bold text-cldlightblue"}>
          {" "}
          Cloudinary, CloudinaryImage, and CloudinaryVideo.
        </span>
      </p>
      <p className={"font-sans mt-1 mb-1 text-white"}>
        You need to supply your Cloudinary{" "}
        <span className={"font-bold"}>cloud name</span> and an asset{" "}
        <span className={"font-bold"}> public id</span> to instantiate an asset.
        Once you have an asset object, you can use url-gen to apply
        transformation functions to build image and video elements. If you only
        need the URL, you can call the toURL() function to generate just the
        URL.
      </p>
      <p className={"font-sans mt-1 mb-1 text-white"}>
        See how to generate URLs to use with HTML5 Image and Video Elements.
      </p>

      <Sandpack
        // You can change these examples!
        // Try uncommenting any of these lines
        theme="dark"
        // theme="light"
        // theme="auto"
        template="react"
        files={{
          "/App.js": cloudinaryImageURLs,
        }}
        customSetup={{
          dependencies: {
            "@cloudinary/react": "^1.9.0",
            "@cloudinary/url-gen": "^1.8.7",
          },
        }}
        options={{
          showNavigator: true,
          showTabs: true,
          showLineNumbers: false, // default - true
          showInlineErrors: true, // default - false
          wrapContent: true, // default - false
          editorHeight: 350, // default - 300
          // editorWidthPercentage: 60, // default - 50
          autorun: false,
          recompileMode: "delayed", //default is immediate
          recompileDelay: 400,
          resizablePanels: true, //default
        }}
      />
      <h3
        className={
          "font-sans font-medium leading-tight text-3xl mt-0 mb-2 text-white"
        }
      >
        Video URL Generator
      </h3>
      <Sandpack
        // You can change these examples!
        // Try uncommenting any of these lines
        theme="dark"
        // theme="light"
        // theme="auto"
        template="react"
        files={{
          "/App.js": cloudinaryVideoURLs,
        }}
        customSetup={{
          dependencies: {
            "@cloudinary/react": "^1.9.0",
            "@cloudinary/url-gen": "^1.8.7",
          },
        }}
        options={{
          showNavigator: true,
          showTabs: true,
          showLineNumbers: false, // default - true
          showInlineErrors: true, // default - false
          wrapContent: true, // default - false
          editorHeight: 300, // default - 300
          // editorWidthPercentage: 60, // default - 50
          autorun: false,
          recompileMode: "delayed", //default is immediate
          recompileDelay: 300,
          resizablePanels: true, //default
        }}
      />
    </div>
  );
}
