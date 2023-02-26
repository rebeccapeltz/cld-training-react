import "../App.css";
import { Sandpack } from "@codesandbox/sandpack-react";
import { INDEX } from "./Index.js";
import Experiment from "./experiments";

const cloudinaryImages = `import {Cloudinary} from "@cloudinary/url-gen";
import { AdvancedImage} from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";

export default function App() {
  // instantiate Cloudinary and call it's image function
  const cld = new Cloudinary({cloud: {cloudName: 'cloudinary-training'}});
  const cldImage = cld.image('cld-sample');
  const cldImageOptimize = cld.image('cld-sample');
  cldImageOptimize.resize(fill().width(400).height(400).gravity("auto")).format("auto").quality("auto");

  return (
    <div>
    <p> <a target="_blank" href={cldImage.toURL()}>{cldImage.toURL()}</a></p>
    <AdvancedImage height="300px" width="auto" cldImg={cldImage} />
    <p> <a target="_blank" href={cldImageOptimize.toURL()}>{cldImageOptimize.toURL()}</a></p>
    <AdvancedImage height="300px" width="auto" cldImg={cldImageOptimize} />
    </div>
  )
}`;

const cloudinaryVideoURLs = `import {Cloudinary} from "@cloudinary/url-gen";
import { AdvancedVideo} from "@cloudinary/react";
import { fill } from "@cloudinary/url-gen/actions/resize";

export default function App() {
  // instantiate Cloudinary and call it's video function
  const cld = new Cloudinary({cloud: {cloudName: 'cloudinary-training'}});
  const cldVideo = cld.video('dog-frisbee');
  const cldVideoOptimize = cld.video('dog-frisbee');
  cldVideoOptimize.resize(fill().width(244).height(400).gravity("auto")).format("auto").quality("auto");

  return (
    <div>
    <p> <a target="_blank" href={cldVideo.toURL()}>{cldVideo.toURL()}</a></p>
    <AdvancedVideo controls height="300px" width="auto" cldVid={cldVideo} />
    <p> <a target="_blank" href={cldVideoOptimize.toURL()}>{cldVideoOptimize.toURL()}</a></p>
    <AdvancedVideo controls height="300px" width="auto" cldVid={cldVideoOptimize} />
    </div>
  )
}`;

export default function Format() {
  return (
    <div className="code-container">
      <h2
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Optimize: "Auto Everything"
      </h2>
      <div className={"font-sans text-clddarkblue"}>
        In these examples you see the combined optimization effects of reducing
        the size of your asset (crop), compressing it (quality), and providing a
        way for it to get the best file type (format) for the browser or device it's
        rendered on. The "auto" options make sure that the subject of your cropped asset 
        focused on, the details in your compressed assets are not lost, and you are using 
        the best format for the browser are device you are rendering to.
      </div>
      <h3
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Optimize Images with Crop with Gravity Auto, Format Auto, and Quality Auto
      </h3>
      <Experiment
        codeString={`  cldImageOptimize.quality("80").format("jpg").resize(fill().width(400).height(400));`}
        experimentTitle={`Explore the Outcomes of Removing the "auto" Parameter`}
        instructions={[`You will need to use Chrome inspector to see details regarding size, format and content type`,
          `Remove "g_auto"`,
`What happens to the cropped image and "g_auto" is not applied?`,
`Modify "q_auto" to "q_80" or use any number to see the difference`,
`What values of quality do you need to use to get the same compression without pixelation that you get with q_auto?`,
`Modify the format type to a value that can be used for an image`,
"What are the potential problems of choosing the image format?",
`What happens to the cropped image and "g_auto" is not applied?`
        ]}
      />
      <Sandpack
        // You can change these examples!
        // Try uncommenting any of these lines
        theme="dark"
        // theme="light"
        // theme="auto"
        template="react"
        files={{
          "/index.js": INDEX,
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
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Optimize Video with Crop, Auto Gravity, Auto Format and Auto Quality
      </h3>
      <Experiment
        codeString={`cldVideoOptimize.resize(fill().width(244).height(400)).format("mp4").quality("80")`}
        experimentTitle={`Explore the Outcomes of Removing the "auto" Parameter`}
        instructions={[`You will need to use Chrome inspector to see details regarding size, format and content type`,
          `Remove "g_auto"`,
`What happens to the cropped video and "g_auto" is not applied?`,
`Modify "q_auto" to "q_80" or use any number to see the difference`,
`What values of quality do you need to use to get the same compression without pixelation that you get with q_auto?`,
`Modify the format type to a value that can be used for an image`,
"What are the potential problems of choosing the image format?",
`What happens to the cropped image and "g_auto" is not applied?`
        ]}
      />
      <Sandpack
        // You can change these examples!
        // Try uncommenting any of these lines
        theme="dark"
        // theme="light"
        // theme="auto"
        template="react"
        files={{
          "/index.js": INDEX,
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
