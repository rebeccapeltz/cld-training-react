import React from 'react'
import '../App.css';

import { Sandpack } from "@codesandbox/sandpack-react";

const placeholder = `
    import {CloudinaryImage} from "@cloudinary/url-gen";
    import { AdvancedImage, placeholder} from "@cloudinary/react";
    export default function App() {
        const doctor = new CloudinaryImage("doctor", { cloudName: "cloudinary-training" });
        const feature = "blur"
        return (
            <div>
            <h3>Render a Placeholder Image</h3>
            <p>Try changing the <strong>feature</strong> variable to "pixelate", "vectorize", and "predominant"</p>
            <h4>Image with {feature} Placeholder </h4>
            <AdvancedImage width="100%" cldImg={doctor} plugins={[placeholder({mode: feature})]}/>
        </div>
        )
    }`


function PlaceholderPlugin() {
    return (
        <div className="code-container">
            {/* <h3 className={'font-medium leading-tight text-3xl mt-0 mb-2 text-white-600'}>Placeholder Plugin</h3> */}
            <Sandpack
                theme="dark"
                template="react"
                files={{
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
    )
}

export default PlaceholderPlugin;