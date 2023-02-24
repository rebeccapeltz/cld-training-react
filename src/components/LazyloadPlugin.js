import React from "react";
import "../App.css";

import { Sandpack } from "@codesandbox/sandpack-react";

// use this custom index.js to turn off StrictMode
const index = `
import React from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";
import App from "./App";
const root = createRoot(document.getElementById("root"));
root.render(<App />);
`;
const lazyload = `
    import {CloudinaryImage} from "@cloudinary/url-gen";
    import { AdvancedImage,lazyload} from "@cloudinary/react";
    import {fill} from "@cloudinary/url-gen/actions/resize";
    export default function App() {
        const brownSheep = new CloudinaryImage("brown_sheep", { cloudName: "demo" });
        brownSheep.resize(fill().width(400).height(400))
        const woman = new CloudinaryImage("woman", { cloudName: "demo" });
        woman.resize(fill().width(400).height(400))
        const cat = new CloudinaryImage("fat_cat", { cloudName: "demo" });
        cat.resize(fill().width(400).height(400))
        const bear = new CloudinaryImage("bear", { cloudName: "demo" });
        bear.resize(fill().width(400).height(400).gravity("gravity"));
        return (
            <div>
            <h3>Scroll down to see images lazyload</h3>
            <p style={{ height: "700px" }}>
             You can open your network tab to see the images loading    
            </p>
            <div style={{ height: "600px" }} />
                <AdvancedImage  style={{display: "block", marginTop: "600px", width: "400px", height: "400px"}}  cldImg={brownSheep} plugins={[lazyload({rootMargin: '5px 5px 5px 5px', threshold: 0.1})]} />
                <AdvancedImage  style={{display: "block", marginTop: "600px", width: "400px", height: "400px"}}  cldImg={cat} plugins={[lazyload({rootMargin: '5px 5px 5px 5px', threshold: 0.15})]} />
                <AdvancedImage  style={{display: "block", marginTop: "600px", width: "400px", height: "400px"}}  cldImg={woman} plugins={[lazyload({rootMargin: '5px 5px 5px 5px', threshold: 0.2})]} />
                <AdvancedImage  style={{display: "block", marginTop: "600px", width: "400px", height: "400px"}}  cldImg={bear} plugins={[lazyload({rootMargin: '5px 5px 5px 5px', threshold: 0.25})]} />

            </div>
        )
    }`;

function LazyloadPlugin() {
  return (
    <div className="code-container">
      <h2
      className={
        "font-sans font-medium leading-tight text-3xl mt-0 mb-2 text-clddarkblue"
      }
      >
        Lazyload Plugin
      </h2>
      <h3
       className={
        "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
      }
      >
        Scroll down to see images lazyload
      </h3>
      <p className="font-sans text-clddarkblue">
        This code has{" "}
        <span className="font-bold">strict mode turned off</span>. With
        strict mode enabled, you will see the images render twice in development
        mode.
      </p>
      <p className="font-sans text-clddarkblue">
        Read more about{" "}
        <a
          className="font sans text-clddarkblue underline"
          href="https://beta.reactjs.org/reference/react/StrictMode"
          rel="noreferrer"
          target="_blank"
        >
          React 18 Strict Mode
        </a>{" "}
        and re-rendering in Development.
      </p>
      <Sandpack
        theme="dark"
        template="react"
        files={{
          "/index.js": index,
          "/App.js": lazyload,
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
          editorWidthPercentage: 60, // default - 50
          // recompileMode: "delayed", //default is immediate
          // recompileDelay: 400,
          resizablePanels: true, //default
        }}
      />
    </div>
  );
}

export default LazyloadPlugin;
