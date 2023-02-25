import React from "react";
import "../App.css";
import { INDEX } from "./Index.js";
import Experiment from "./experiments";

import { Sandpack } from "@codesandbox/sandpack-react";

const responsiveStepSize = `
    import {CloudinaryImage} from "@cloudinary/url-gen";
    import {scale} from "@cloudinary/url-gen/actions/resize";
    import { AdvancedImage, responsive} from "@cloudinary/react";
    export default function App() {
        const cloudinaryImage = new CloudinaryImage("cld-sample", { cloudName: "cloudinary-training" });
        return (
            <div>
            <h3>Render a Responsive Cloudinary Image</h3>
            <p>Resize viewport to see changes (Step size is 100 pixels)</p>
            <AdvancedImage
              cldImg={cloudinaryImage.resize(scale().width(300))}
              plugins={[responsive({ steps: 100 })]}
            />
            </div>
        )
    }`;

    const responsiveSteps = `
    import {CloudinaryImage} from "@cloudinary/url-gen";
    import {scale} from "@cloudinary/url-gen/actions/resize";
    import { AdvancedImage, responsive} from "@cloudinary/react";
    export default function App() {
        const cloudinaryImage = new CloudinaryImage("cld-sample", { cloudName: "cloudinary-training" });
        return (
            <div>
            <h3>Render a Responsive Cloudinary Image</h3>
            <p>Resize viewport to see changes (Step size is 100 pixels)</p>
            <AdvancedImage
              cldImg={cloudinaryImage.resize(scale().width(300))}
              plugins={[responsive({ steps: [360, 768, 1366]})]}
            />
            </div>
        )
    }`;

function ResponsivePlugin() {
  return (
    <div className="code-container">
      <h2
        className={
          "font-sans font-medium leading-tight text-3xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Responsive Plugin Using Steps Size
      </h2>
      <Experiment
        codeString={` plugins={[responsive({ steps: 100 })]}`}
        experimentTitle={`Experiment with Responsive Breakpoints`}
        instructions={[
          `With the Chrome inspector network tab open, start with a small viewport and drag the viewport to increate the width`,
          `Note that larger images get downloaded as the when the viewport has increased by 100px`,
          `Change the step values to see the effect`,
        ]}
      />
      <Sandpack
        theme="dark"
        template="react"
        files={{
          "/index.js": INDEX,
          "/App.js": responsiveStepSize,
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
          autorun: false,
          recompileMode: "delayed", //default is immediate
          recompileDelay: 400,
          resizablePanels: true, //default
        }}
      />

<h2
        className={
          "font-sans font-medium leading-tight text-3xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Responsive Plugin Using Array of Step Sizes
      </h2>
      <Experiment
        codeString={`plugins={[responsive({ steps: [360, 768, 1366]})]}`}
        experimentTitle={`Experiment with Responsive Breakpoints`}
        instructions={[
          `With the Chrome inspector network tab open, start with a small viewport and drag the viewport to increate the width`,
          `Note that larger images get downloaded as the breakpoints specified are arrived at`,
          `Change the step values to see the effect`,
        ]}
      />
      <Sandpack
        theme="dark"
        template="react"
        files={{
          "/index.js": INDEX,
          "/App.js": responsiveSteps,
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
          autorun: false,
          recompileMode: "delayed", //default is immediate
          recompileDelay: 400,
          resizablePanels: true, //default
        }}
      />
      
    </div>
  );
}

export default ResponsivePlugin;
