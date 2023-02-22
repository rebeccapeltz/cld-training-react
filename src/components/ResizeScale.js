import "../App.css";
import { Sandpack } from "@codesandbox/sandpack-react";
import {INDEX} from "./Index.js";
import Experiment from "./experiments";

const cloudinaryAdvancedImage = `import {AdvancedImage} from '@cloudinary/react';
import {CloudinaryImage} from "@cloudinary/url-gen";
import {scale} from '@cloudinary/url-gen/actions/resize';

export default function App() {
  const image = new CloudinaryImage('cld-sample',{cloudName:'demo'});

  image.resize(scale().width(350));
  return (
    <div>
      <AdvancedImage cldImg={image} />
    </div>
  )
}
`;
const cloudinaryAdvancedVideo = `import {AdvancedVideo} from '@cloudinary/react';
import {CloudinaryVideo} from "@cloudinary/url-gen";
import {scale} from '@cloudinary/url-gen/actions/resize';


const video = new CloudinaryVideo('climbing',{cloudName:'cloudinary-training'});
video.resize(scale().width(350));
export default function App() {
  return (
    <div className="App">
      <AdvancedVideo cldVid={video} controls cldPoster="auto" />
    </div>
  );
}
`;

export default function CldBuildVideo() {
  return (
    <div className="code-container">
      <h3
        className={
          "font-sans font-medium leading-tight text-3xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Scale Image
      </h3>
      <Experiment
          codeString={`image.resize(scale().width(350).height(350))`}
          experimentTitle={"Experiment by adding both height and width to the image transformation."}
          instructions={[
          `Scaling can result in skewed images if you supply a height and width that don't match the original aspect ratio`,
          "Add a height function call to the transformation.",
          "Try different values for height and width"
          ]}
        />
      <Sandpack
        theme="dark"
        template="react"
        files={{
          "/index.js": INDEX,
          "/App.js": cloudinaryAdvancedImage,
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
          autorun: false,
          recompileMode: "delayed", //default is immediate
          recompileDelay: 400,
          resizablePanels: true, //default
        }}
      />
      <h3
        className={
          "font-sans font-medium leading-tight text-3xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Scale Video
      </h3>
      <Experiment
          codeString={`video.resize(scale().width(350).height(350))`}
          experimentTitle={"Experiment by adding both height and width to the video transformation."}
          instructions={[
          `Scaling can result in skewed images if you supply a height and width that don't match the original aspect ratio`,
          "Add a height function call to the transformation.",
          "Try different values for height and width"
          ]}
        />
      <Sandpack
        theme="dark"
        template="react"
        files={{
          "/index.js": INDEX,
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
          showLineNumbers: false, // default - true
          showInlineErrors: true, // default - false
          wrapContent: true, // default - false
          editorHeight: 300, // default - 300
          autorun: false,
          recompileMode: "delayed", //default is immediate
          recompileDelay: 400,
          resizablePanels: true, //default
        }}
      />
    </div>
  );
}
