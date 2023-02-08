import '../App.css';
import { Sandpack } from "@codesandbox/sandpack-react";

const cloudinaryAdvancedVideo = `
import {AdvancedVideo} from '@cloudinary/react';
import {CloudinaryVideo} from "@cloudinary/url-gen";
const video = new CloudinaryVideo('elephants',{cloudName:'demo',analytics:false});
export default function App() {
  return (
    <div className="App">
      <AdvancedVideo cldVid={video} style={{width:"auto", maxHeight: "300px"}} controls cldPoster="auto" />
    </div>
  );
}
`

const cloudinaryVideoURL = `
import {AdvancedVideo} from '@cloudinary/react';
import {CloudinaryVideo} from "@cloudinary/url-gen";
import {format} from "@cloudinary/url-gen/actions/delivery";
const video = new CloudinaryVideo('elephants',{cloudName:'demo',analytics:false});
const videoURL = video.toURL();
const posterURL = video.format('jpg').toURL();
console.log(videoURL);
export default function App() {
  return (
    <div className="App">
        <video style={{width:"auto", height:"300px"}} controls poster={posterURL}>
            <source src={videoURL} type="video/mp4" />
            Your browser does not support the video tag.
        </video>    
  </div>
  );
}
`

export default function CldBuildVideo() {

    return (
        <div className="code-container">
            <h3 className={'font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600'}>Advanced Video</h3>
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
                    editorHeight: 350, // default - 300
                    autorun: false,
                    recompileMode: "delayed", //default is immediate
                    recompileDelay: 400,
                    resizablePanels: true, //default
                }}
            />
            <h3 className={'font-medium leading-tight text-3xl mt-0 mb-2 text-blue-600'}>Video URL</h3>
            <Sandpack
                theme="dark"
                template="react"
                files={{
                    "/App.js": cloudinaryVideoURL,
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
                    editorHeight: 350, // default - 300
                    autorun: false,
                    recompileMode: "delayed", //default is immediate
                    recompileDelay: 400,
                    resizablePanels: true, //default
                }}
            />
        </div>
    )
}

