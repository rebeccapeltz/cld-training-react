import React from 'react'
import '../App.css';

import { Sandpack } from "@codesandbox/sandpack-react";

const lazyload = `
    import {CloudinaryImage} from "@cloudinary/url-gen";
    import { AdvancedImage,lazyload} from "@cloudinary/react";
    import {thumbnail} from "@cloudinary/url-gen/actions/resize";
    export default function App() {
        const brownSheep = new CloudinaryImage("brown_sheep", { cloudName: "demo" });
        brownSheep.resize(thumbnail().width(150).height(150))
        const woman = new CloudinaryImage("woman", { cloudName: "demo" });
        woman.resize(thumbnail().width(150).height(150))
        const cat = new CloudinaryImage("fat_cat", { cloudName: "demo" });
        cat.resize(thumbnail().width(150).height(150))
        return (
            <div>
            <h3>Scroll down to see images lazyload</h3>
            <p style={{ height: "700px" }}>
             You can open your network tab to see the images loading    
            </p>
            <div style={{ height: "600px" }} />
            <AdvancedImage  style={{width: "150px", height: "150px"}}  cldImg={brownSheep} plugins={[lazyload({rootMargin: '10px 20px 10px 30px', threshold: 0.25})]} />
            </div>
        )
    }`


function LazyloadPlugin() {
    return (
        <div className="code-container">
            {/* <h3 className={'font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600'}>Lazyload Plugin</h3> */}
            <Sandpack
                theme="dark"
                template="react"
                files={{
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
                    recompileMode: "delayed", //default is immediate
                    recompileDelay: 150,
                    resizablePanels: true, //default
                }}
            />

        </div>
    )
}

export default LazyloadPlugin;