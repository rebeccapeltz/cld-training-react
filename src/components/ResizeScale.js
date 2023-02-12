import '../App.css';
import { Sandpack } from "@codesandbox/sandpack-react";



const cloudinaryAdvancedImage = `
import {AdvancedImage} from '@cloudinary/react';
import {CloudinaryImage} from "@cloudinary/url-gen";
import {scale} from '@cloudinary/url-gen/actions/resize';

export default function App() {
  const image = new CloudinaryImage('cld-sample',{cloudName:'demo',analytics:false});

  image.resize(scale().width(350));
  return (
    <div>
      <AdvancedImage  height="250px" width="auto"  cldImg={image} />
    </div>
  )
}
`
const cloudinaryAdvancedVideo = `
import {AdvancedVideo} from '@cloudinary/react';
import {CloudinaryVideo} from "@cloudinary/url-gen";
import {scale} from '@cloudinary/url-gen/actions/resize';


const video = new CloudinaryVideo('climbing',{cloudName:'cloudinary-training',analytics:false});
video.resize(scale().width(350));
export default function App() {
  return (
    <div className="App">
      <AdvancedVideo cldVid={video} height="250px" width="auto" controls cldPoster="auto" />
    </div>
  );
}
`

export default function CldBuildVideo() {

    return (
        <div className="code-container">
            <h3 className={'font-medium leading-tight text-3xl mt-0 mb-2 text-white-600'}>Scale Image</h3>
            <Sandpack
                theme="dark"
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
                    autorun: false,
                    recompileMode: "delayed", //default is immediate
                    recompileDelay: 400,
                    resizablePanels: true, //default
                }}
            />
            <h3 className={'font-medium leading-tight text-3xl mt-0 mb-2 text-white-600'}>Scale Video</h3>
            <Sandpack
                theme="dark"
                template="react"
                files={{
                    "/App.js": cloudinaryAdvancedVideo,
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
                    autorun: false,
                    recompileMode: "delayed", //default is immediate
                    recompileDelay: 400,
                    resizablePanels: true, //default
                }}
            />
        </div>
    )
}

