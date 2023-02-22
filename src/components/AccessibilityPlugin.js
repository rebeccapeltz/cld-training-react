import React from "react";
import "../App.css";

import { Sandpack } from "@codesandbox/sandpack-react";

const accessbility = `import {CloudinaryImage} from "@cloudinary/url-gen";
    import {scale} from "@cloudinary/url-gen/actions/resize";
    import { AdvancedImage, accessibility} from "@cloudinary/react";
    export default function App() {
        const cloudinaryImage = new CloudinaryImage("sample", { cloudName: "demo" });
        return (
            <div>
            <h3>Render a Cloudinary Image</h3>
            <AdvancedImage cldImg={cloudinaryImage.resize(scale().width(300))} />
            <h3>Default Accessibility</h3>
            <AdvancedImage 
                cldImg={cloudinaryImage} 
                plugins={[accessibility()]} />
            <h3>Colorblind Accessibility</h3>
            <AdvancedImage
                cldImg={cloudinaryImage}
                plugins={[accessibility({ mode: "colorblind" })]}
            />
            <h3>Monochrome Accessiblity</h3>
            <AdvancedImage
                cldImg={cloudinaryImage}
                plugins={[accessibility({ mode: "monochrome" })]}
             />
             <h3>Also try: "darkmode" and "brightmode" </h3>
            </div>
        )
    }`;

function AccessibilityPlugin() {
  return (
    <div className="code-container">
      <h2
       className={
        "font-sans font-medium leading-tight text-3xl mt-0 mb-2 text-white"
      }
      >
        Accessiblity Plugin
      </h2>{" "}
      <Sandpack
        theme="dark"
        template="react"
        files={{
          "/App.js": accessbility,
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

export default AccessibilityPlugin;
