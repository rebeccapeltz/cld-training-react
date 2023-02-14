import "../App.css";
import { Sandpack } from "@codesandbox/sandpack-react";

const singleVideo = `import {AdvancedVideo} from '@cloudinary/react';
import {CloudinaryVideo} from "@cloudinary/url-gen";
export default function App() {
  const cldVideo = new CloudinaryVideo('climbing',{cloudName: 'cloudinary-training'}); 
  return (
    <div>
      <AdvancedVideo height="300px" width="auto" cldVid={cldVideo} />
    </div>
  )
}`;

const multipleVideos = `import {AdvancedVideo} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'cloudinary-training'
    }
  }); 
  const cldVideo1 = cld.video('climbing');
  const cldVideo2 = cld.video('climbing');
  return (
    <div>
    <AdvancedVideo height="300px" width="auto" cldVid={cldVideo1} />
    <AdvancedVideo height="300px" width="auto" cldVid={cldVideo2} />

    </div>
  )
}`;

export default function RenderingAdvancedVideo() {
  return (
    <div className="code-container">
      <h2
        className={
          "font-medium leading-tight text-4xl mt-0 mb-2 text-white-600"
        }
      >
        AdvancedVideo
      </h2>

      <h3
        className={
          "font-medium leading-tight text-3xl mt-0 mb-2 text-white-600"
        }
      >
        Single Video
      </h3>
      <p>
        When you are rendering just a single video in your component, you can
        use "CloudinaryVideo" and supply both Cloud Name and Public ID.
      </p>
      <Sandpack
        // You can change these examples!
        // Try uncommenting any of these lines
        theme="dark"
        // theme="light"
        // theme="auto"
        template="react"
        files={{
          "/App.js": singleVideo,
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
          editorHeight: 300, // default - 300
          // editorWidthPercentage: 60, // default - 50
          autorun: false,
          recompileMode: "delayed", //default is immediate
          recompileDelay: 400,
          resizablePanels: true, //default
        }}
      />
      <h3
        className={
          "font-medium leading-tight text-3xl mt-0 mb-2 text-white-600"
        }
      >
        Multiple Videos
      </h3>
      <p>
        When you are rendering  multiple videos in your component, it is more efficient to create a Cloudinary instance, 
        which has a video method that will generate new CloudinaryVideo objects for you.  You only have to specify the Cloud Name 
        once when you create a Cloudinary instance.  When you create a new video, you specify the Public ID.
      </p>
      <Sandpack
        // You can change these examples!
        // Try uncommenting any of these lines
        theme="dark"
        // theme="light"
        // theme="auto"
        template="react"
        files={{
          "/App.js": multipleVideos,
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
