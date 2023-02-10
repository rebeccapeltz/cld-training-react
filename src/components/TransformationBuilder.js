import '../App.css';
import { Sandpack } from "@codesandbox/sandpack-react";

const cloudinaryAdvancedImage = `
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {Transformation} from "@cloudinary/url-gen";
import {outline, cartoonify} from "@cloudinary/url-gen/actions/effect";

export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  }); 
  const myImage = cld.image('front_face');
  return (
    <div>
      <AdvancedImage cldImg={myImage.effect(cartoonify())} />
    </div>
  )
}`

export default function CldBuildImg() {

    return (
        <div className="code-container">
            <h2 className={'font-medium leading-tight text-3xl mt-0 mb-2 text-white-600'}>Transformation Builder</h2>
            <p className="mt-1 mb-1">Transformation Builder behaves like a Singleton.  If you modify the instance, you will see all instances on your page modified. If you want to create a new transformation without affecting an existing transformation, create a new instance of CloudinaryImage.</p>
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
                    editorHeight: 425, // default - 300
                    // editorWidthPercentage: 60, // default - 50
                    autorun: false,
                    recompileMode: "delayed", //default is immediate
                    recompileDelay: 400,
                    resizablePanels: true, //default
                }}
            />
            
        </div>
    )
}

