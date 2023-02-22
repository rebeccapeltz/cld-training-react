import "../App.css";
import { Sandpack } from "@codesandbox/sandpack-react";

const cloudinaryAdvancedImage = `import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {pad} from '@cloudinary/url-gen/actions/resize';
import { color } from "@cloudinary/url-gen/qualifiers/background";
export default function App() {
  const cld = new Cloudinary({ cloud: {cloudName: 'demo'}});
  const cldImage = cld.image('cld-sample')
      .resize(pad().width(350).height(200)
      .background(color("auto")));
  return (
    <div>
      <AdvancedImage cldImg={cldImage} />
    </div>
  )
}
`;
const cloudinaryAdvancedVideo = `import {AdvancedVideo} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {pad} from '@cloudinary/url-gen/actions/resize';
import { color } from "@cloudinary/url-gen/qualifiers/background";

const cld = new Cloudinary({ cloud: {cloudName: 'cloudinary-training'}});
const cldVideo = cld.video('climbing').resize(pad().width(300).height(400).background(color("#ff0000")));
export default function App() {
  return (
    <div className="App">
      <AdvancedVideo cldVid={cldVideo} controls cldPoster="auto" />
    </div>
  );
}
`;
export default function PadWithBackground() {
  return (
    <div className="code-container">
      <h3
        className={
          "font-sans font-medium leading-tight text-3xl mt-0 mb-2 text-white"
        }
      >
        Pad Images with Background
      </h3>
      <p className={"font-sans mt-1 mb-1 text-white"}>
        You can assign a color or use auto to use the predominant color in the
        image.
      </p>
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
          showLineNumbers: true, // default - true
          showInlineErrors: true, // default - false
          wrapContent: true, // default - false
          editorHeight: 400, // default - 300
          autorun: false,
          recompileMode: "delayed", //default is immediate
          recompileDelay: 400,
          resizablePanels: true, //default
        }}
      />
      <h3
        className={
          "font-sans font-medium leading-tight text-3xl mt-0 mb-2 text-white"
        }
      >
        Pad Video with Background Auto
      </h3>

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
          showLineNumbers: true, // default - true
          showInlineErrors: true, // default - false
          wrapContent: true, // default - false
          editorHeight: 400, // default - 300
          autorun: false,
          recompileMode: "delayed", //default is immediate
          recompileDelay: 400,
          resizablePanels: true, //default
        }}
      />
    </div>
  );
}
