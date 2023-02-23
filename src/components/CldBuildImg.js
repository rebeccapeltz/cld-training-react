import '../App.css';
import { Sandpack } from "@codesandbox/sandpack-react";

const cloudinaryAdvancedImage = `
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {Transformation} from "@cloudinary/url-gen";
export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  }); 
  const myImage = cld.image('front_face');
  return (
    <div>
      <AdvancedImage cldImg={myImage} />
    </div>
  )
}`
const cloudinaryImageURL = `
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {Transformation} from "@cloudinary/url-gen";
export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  }); 
  const myImageURL = cld.image('front_face').toURL();
  return (
    <div>
      <img src={myImageURL} />
    </div>
  )
}`


export default function CldBuildImg() {

    return (
        <div className="code-container">
            <h3 className={'font-medium leading-tight text-3xl mt-0 mb-2 text-white-600'}>Advanced Image</h3>
            <Sandpack
                // You can change these examples!
                // Try uncommenting any of these lines
                theme="dark"
                // theme="light" 
                // theme="auto"
                template="react"
                files={{
                    "/App.js": cloudinaryAdvancedImage,
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
                    editorHeight: 300, // default - 300
                    // editorWidthPercentage: 60, // default - 50
                    autorun: false,
                    recompileMode: "delayed", //default is immediate
                    recompileDelay: 400,
                    resizablePanels: true, //default
                }}
            />
             <h3 className={'font-medium leading-tight text-3xl mt-0 mb-2 text-white-600'}>Image URL</h3>
            <Sandpack
                // You can change these examples!
                // Try uncommenting any of these lines
                theme="dark"
                // theme="light" 
                // theme="auto"
                template="react"
                files={{
                    "/App.js": cloudinaryImageURL,
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
                    editorHeight: 300, // default - 300
                    // editorWidthPercentage: 60, // default - 50
                    autorun: false,
                    recompileMode: "delayed", //default is immediate
                    recompileDelay: 300,
                    resizablePanels: true, //default
                }}
            />
        </div>
    )
}

