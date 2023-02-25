import React from "react";
import "../App.css";
import { INDEX } from "./Index.js";
import Experiment from "./experiments";

import { Sandpack } from "@codesandbox/sandpack-react";

const accessbility = `import {CloudinaryImage} from "@cloudinary/url-gen";
    import {scale} from "@cloudinary/url-gen/actions/resize";
    import { AdvancedImage, accessibility} from "@cloudinary/react";
    export default function App() {
        const cloudinaryImage = new CloudinaryImage("sample", { cloudName: "cloudinary-training" });
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
            </div>
        )
    }`;

const combined = `import {CloudinaryImage} from "@cloudinary/url-gen";
    import {scale} from "@cloudinary/url-gen/actions/resize";
    import { AdvancedImage, accessibility, responsive, placeholder,lazyload} from "@cloudinary/react";
    export default function App() {
        const cloudinaryImage = new CloudinaryImage("sample", { cloudName: "cloudinary-training" });
        return (
            <div>
            <h3>Combining Plugins</h3>
            <AdvancedImage
                cldImg={cloudinaryImage}
                plugins={[accessibility(),responsive(), placeholder(), lazyload()]}
             />
        )
    }`;

function AccessibilityPlugin() {
  return (
    <div className="code-container">
      <h2
        className={
          "font-sans font-medium leading-tight text-3xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Accessiblity Plugin
      </h2>{" "}
      <Experiment
        codeString={`plugins={[accessibility({ mode: "monochrome|colorblind|brightmode|darkmode(default)" })]}`}
        experimentTitle={`Experiment with Accessibility Modes`}
        instructions={[
          `"darkmode" is the default when you omit a mode and is useful for users with cataracts or other light sensitivity`,
          `Try "darkmode" `,
          `"brightmode" is useful for users with good or corrected vision but can lead to myopia (nearsightedness) if there is too much reading exposure in brightmode`,
          `Try "brightmode"`,
        ]}
      />
      <Sandpack
        theme="dark"
        template="react"
        files={{
          "/index.js": INDEX,
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
      <h2
        className={
          "font-sans font-medium leading-tight text-3xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Accessiblity Plugin
      </h2>{" "}
      <Experiment
        codeString={`plugins={[accessibility(),responsive(), placeholder(), lazyload()]}`}
        experimentTitle={`Experiment with Combining Plugins`}
        instructions={[
          `Now that you've experimented with all fo the plugins, try combining them and note the defaults for each of them`,
          `Sometimes it can be difficult to see the individual effects when all of the plugins are used`,
          `Which would be most useful for you?`,
        ]}
      />
      <Sandpack
        theme="dark"
        template="react"
        files={{
          "/index.js": INDEX,
          "/App.js": combined,
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
