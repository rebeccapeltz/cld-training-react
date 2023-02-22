import React from "react";
import "../App.css";

import { Sandpack } from "@codesandbox/sandpack-react";

const responsive = `
    import {CloudinaryImage} from "@cloudinary/url-gen";
    import {scale} from "@cloudinary/url-gen/actions/resize";
    import { AdvancedImage, responsive} from "@cloudinary/react";
    export default function App() {
        const cloudinaryImage = new CloudinaryImage("cld-sample", { cloudName: "demo" });
        return (
            <div>
            <h3>Render a Responsive Cloudinary Image</h3>
            <p>Resize window to see changes (Step size is 100 pixels)</p>
            <AdvancedImage
              cldImg={cloudinaryImage.resize(scale().width(300))}
              plugins={[responsive({ steps: 100 })]}
            />
            </div>
        )
    }`;

function ResponsivePlugin() {
  return (
    <div className="code-container">
      <h2
       className={
        "font-sans font-medium leading-tight text-3xl mt-0 mb-2 text-white"
      }
      >
        Responsive Plugin
      </h2>
      <Sandpack
        theme="dark"
        template="react"
        files={{
          "/App.js": responsive,
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

export default ResponsivePlugin;
