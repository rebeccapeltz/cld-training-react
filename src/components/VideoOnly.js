import "../App.css";
import { Sandpack } from "@codesandbox/sandpack-react";

const cloudinaryAdvancedVideo = `import {AdvancedVideo,AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {scale, fill} from "@cloudinary/url-gen/actions/resize";
import { VideoEdit, trim} from "@cloudinary/url-gen/actions/videoEdit";

const cld = new Cloudinary({
cloud: {
    cloudName: 'cloudinary-training'
}
});

// show the first 20 seconds by ending at 20 seconds
const first20Seconds = cld.video('video-trn/barneys-first-car');
first20Seconds
    .videoEdit(VideoEdit.trim().endOffset("20.0"))  
    .resize(fill().width(400).height(300))

// show the last 20 seconds by starting at 
let start = ((23*60 + 51) - 20) + "";
const last20Seconds = cld.video('video-trn/barneys-first-car');
last20Seconds
    .videoEdit(VideoEdit.trim().startOffset(start))
    .resize(fill().width(400).height(300));

// show 20 seconds at about 17 minutes seconds
const cldVideoInTheMiddle = cld.video('video-trn/barneys-first-car');
cldVideoInTheMiddle
    .videoEdit(VideoEdit.trim().startOffset("1000.0").duration("20.0"))
    .resize(fill().width(400).height(300));
console.log("url",cldVideoInTheMiddle.toURL());

// create an image from a video frame
const imageFromFrame = cld.video('video-trn/barneys-first-car')
    .resize(fill().width(400).height(300))
    .videoEdit(VideoEdit.trim().startOffset("10.0"))
    .format("jpg");

export default function App() {
  return (
    <div className="App">
      <AdvancedVideo cldVid={first20Seconds} controls />
      <AdvancedVideo cldVid={last20Seconds} controls />
      <AdvancedVideo cldVid={cldVideoInTheMiddle} controls />
      <AdvancedImage cldImg={imageFromFrame} />
    </div>
  );
}`;

export default function VideoOnly() {
  return (
    <div className="code-container">
      <h2
       className={
        "font-sans font-medium leading-tight text-3xl mt-0 mb-2 text-clddarkblue"
      }
      >
        Video Only Transformations
      </h2>{" "}
      <p className={"font-sans text-clddarkblue underline"}>
        Credit:{" "}
        <a
          href="https://archive.org/details/Andy_Griffith_Barneys_First_Car"
          rel="noreferrer"
          target="_blank"
        >
          Barney's First Car{" "}
        </a>
      </p>
      <Sandpack
        theme="dark"
        template="react"
        files={{
          "/App.js": cloudinaryAdvancedVideo,
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
          showLineNumbers: true, // default - true
          showInlineErrors: true, // default - false
          wrapContent: true, // default - false
          editorHeight: 500, // default - 300
          autorun: false,
          recompileMode: "delayed", //default is immediate
          recompileDelay: 400,
          resizablePanels: true, //default
        }}
      />
    </div>
  );
}
