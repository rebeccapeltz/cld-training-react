import React from "react";
import "../App.css";
import { INDEX } from "./Index.js";
import Experiment from "./experiments";

import { Sandpack } from "@codesandbox/sandpack-react";

const placeholder = `
    import {CloudinaryImage} from "@cloudinary/url-gen";
    import { AdvancedImage, placeholder} from "@cloudinary/react";
    export default function App() {
        const doctor = new CloudinaryImage("doctor", { cloudName: "cloudinary-training" });
        // if no modeType is specified "blur" is the default
        const modeType = "blur" 
        return (
            <div>
            <h3>Render a Placeholder Image</h3>
            <h4>Image with {modeType} Placeholder </h4>
            <AdvancedImage width="100%" cldImg={doctor} plugins={[placeholder({mode: modeType})]}/>
        </div>
        )
    }`;

function PlaceholderPlugin() {
  return (
    <div className="code-container">
      <h2
        className={
          "font-sans font-medium leading-tight text-3xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Placeholder Plugin
      </h2>{" "}
      <Experiment
codeString={`const modeType = "pixelate";
<AdvancedImage width="100%" cldImg={doctor} plugins={[placeholder({mode: modeType})]}/>`}
        experimentTitle={`Discover and Experiment with Placeholder Mode Types`}
        instructions={[
          `There are 4 mode types to experiment with: blur, pixelate, vectorize, and predominant`,
          `Change the mode types`,
          `Note the sizes of the images downloaded as placeholders`,
          `Note the types you would prefer as a user`,
        ]}
      />
      <Sandpack
        theme="dark"
        template="react"
        files={{
          "/index.js": INDEX,
          "/App.js": placeholder,
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
          editorHeight: 600, // default - 300
          autorun: false,
          recompileMode: "delayed", //default is immediate
          recompileDelay: 400,
          resizablePanels: true, //default
        }}
      />
    </div>
  );
}

export default PlaceholderPlugin;
