import "../App.css";
import { Sandpack } from "@codesandbox/sandpack-react";

const cloudinaryImages = `import {Cloudinary} from "@cloudinary/url-gen";
import { AdvancedImage} from "@cloudinary/react";

export default function App() {
  // instantiate Cloudinary and call it's image function
  const cld = new Cloudinary({cloud: {cloudName: 'demo'}});
  const cldImage = cld.image('cld-sample');
  const cldImageAutoFormat = cld.image('cld-sample');
  cldImageAutoFormat.format("auto");

  return (
    <div>
    <p> <a target="_blank" href={cldImage.toURL()}>{cldImage.toURL()}</a></p>
    <AdvancedImage height="300px" width="auto" cldImg={cldImage} />
    <p> <a target="_blank" href={cldImageAutoFormat.toURL()}>{cldImageAutoFormat.toURL()}</a></p>
    <AdvancedImage height="300px" width="auto" cldImg={cldImageAutoFormat} />
    </div>
  )
}`;

const cloudinaryVideoURLs = `import {Cloudinary} from "@cloudinary/url-gen";
import { AdvancedVideo} from "@cloudinary/react";

export default function App() {
  // instantiate Cloudinary and call it's video function
  const cld = new Cloudinary({cloud: {cloudName: 'cloudinary-training'}});
  const cldVideo = cld.video('climbing');
  const cldVideoAutoFormat = cld.video('climbing');
  cldVideoAutoFormat.format("auto:video");

  return (
    <div>
    <p> <a target="_blank" href={cldVideo.toURL()}>{cldVideo.toURL()}</a></p>
    <AdvancedVideo controls height="300px" width="auto" cldVid={cldVideo} />
    <p> <a target="_blank" href={cldVideoAutoFormat.toURL()}>{cldVideoAutoFormat.toURL()}</a></p>
    <AdvancedVideo controls height="300px" width="auto" cldVid={cldVideoAutoFormat} />
    </div>
  )
}`;

export default function Format() {
  return (
    <div className="code-container">
      <h3
        className={
          "font-sans font-medium leading-tight text-3xl mt-0 mb-2 text-white"
        }
      >
        Using Format with Images
      </h3>
      <Sandpack
        // You can change these examples!
        // Try uncommenting any of these lines
        theme="dark"
        // theme="light"
        // theme="auto"
        template="react"
        files={{
          "/App.js": cloudinaryImages,
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
        Using Format with Video
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
          editorHeight: 500, // default - 300
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
