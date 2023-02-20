import "../App.css";
import { Sandpack } from "@codesandbox/sandpack-react";

const image = `import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {Transformation} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";
import {source} from "@cloudinary/url-gen/actions/overlay";
import {text} from "@cloudinary/url-gen/qualifiers/source";
import {TextStyle} from "@cloudinary/url-gen/qualifiers/textStyle";
import {Position} from "@cloudinary/url-gen/qualifiers/position";
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";

export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'cloudinary-training'
    }
  }); 
  const cldImage = cld.image('cld-sample');

  cldImage
  .resize(fill().height(250).width(250).gravity("auto"))
  .overlay(
    source(
      text("Sprinkles and Spots", new TextStyle("Arial", 20))
      .textColor("white")
      .backgroundColor("#0c163b")
    ).position(
      new Position().gravity(compass("south")).offsetY(20)
    )
  );
  return (
    <div>
      <AdvancedImage alt="Sample Image" cldImg={cldImage} />
    </div>
  )
}`;
const video = `import {AdvancedVideo} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {Transformation} from "@cloudinary/url-gen";
import {scale, fill} from "@cloudinary/url-gen/actions/resize";
import {source} from "@cloudinary/url-gen/actions/overlay";
import {text} from "@cloudinary/url-gen/qualifiers/source";
import {TextStyle} from "@cloudinary/url-gen/qualifiers/textStyle";
import {Position } from "@cloudinary/url-gen/qualifiers/position";
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";

export default function App() {
  const cld = new Cloudinary({cloud: {cloudName: 'picturecloud7'}
  }); 
  const cldVideo = cld.video('long-wave');
  
  cldVideo
  .resize(fill().height(250).width(250).gravity("auto"))
    .overlay(
        source(
            text(" Long Wave ", new TextStyle("Pacifico", 30))
            .textColor("gold")
            .backgroundColor("#0c163b")
            ).position(
            new Position().gravity(compass("north")).offsetY(10)
            )
    );

  return (
    <div className={"flex"}>
      <AdvancedVideo controls cldVid={cldVideo} />
    </div>
  )
}`;

export default function OverlayText() {
  return (
    <div className="code-container">

   <h3
        className={
          "font-sans font-medium leading-tight text-3xl mt-0 mb-2 text-white-600"
        }
      >
        Text Overlaid on Image
      </h3>
      <p className="font-sans">
        Look for the message in the central, lower area the image.
      </p>
      <Sandpack
        // You can change these examples!
        // Try uncommenting any of these lines
        theme="dark"
        // theme="light"
        // theme="auto"
        template="react"
        files={{
          "/App.js": image,
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

      <h3
        className={
          "font-sans font-medium leading-tight text-3xl mt-0 mb-2 text-white-600"
        }
      >
        Text Overlaid on Video
      </h3>
      <p className={"font-sans"}>
        Look for the watermark in the central, upper area of the
        video.
      </p>
      <Sandpack
        // You can change these examples!
        // Try uncommenting any of these lines
        theme="dark"
        // theme="light"
        // theme="auto"
        template="react"
        files={{
          "/App.js": video,
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
    </div>
  );
}