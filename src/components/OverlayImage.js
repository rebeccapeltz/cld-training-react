import "../App.css";
import { Sandpack } from "@codesandbox/sandpack-react";


const image = `import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {Transformation} from "@cloudinary/url-gen";
import {scale, fill} from "@cloudinary/url-gen/actions/resize";
import {source} from "@cloudinary/url-gen/actions/overlay";
import {Position} from "@cloudinary/url-gen/qualifiers/position";
import {image} from "@cloudinary/url-gen/qualifiers/source";
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";
// import { Adjust, brightness, opacity } from "@cloudinary/url-gen/actions/adjust";
// import { relative} from "@cloudinary/url-gen/qualifiers/flag";


export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'cloudinary-training'
    }
  }); 
  const cldImage = cld.image('cld-sample');
  
  cldImage.resize(fill().height(250).width(250).gravity("auto"))
  .overlay(
    source(
      image("logo-big")
          .transformation(new Transformation()
          .resize(scale().width(50).regionRelative()))
          )
         .position(new Position().gravity(compass('south_east')).offsetX(20).offsetY(20)) 
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
import {Position } from "@cloudinary/url-gen/qualifiers/position";
import {image} from "@cloudinary/url-gen/qualifiers/source";
import {compass} from "@cloudinary/url-gen/qualifiers/gravity";

export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'cloudinary-training'
    }
  }); 
  const cldVideo = cld.video('wave');
  
  cldVideo.resize(fill().height(250).width(250).gravity("auto"))
  .overlay(
    source(
      image("cld-white-logo")
          .transformation(new Transformation()
          .resize(scale().width(50).regionRelative()))
       )
      .position(new Position().gravity(compass('north_east')).offsetX(20).offsetY(20)) 
   );

  return (
    <div className={"flex"}>
      <AdvancedVideo controls cldVid={cldVideo} />
    </div>
  )
}`;

export default function OverlayImage() {
  return (
    <div className="code-container">
      {/* <h2
        className={
          "font-medium leading-tight text-4xl mt-0 mb-2 text-white-600"
        }
      >
        ImageOverlay
      </h2> */}

      <h3
        className={
          "font-sans font-medium leading-tight text-3xl mt-0 mb-2 text-white-600"
        }
      >
       Image Overlaid on Image
      </h3>
      <p>        
        Look for the watermark in the lower left or south east corner of the iamge.
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
       Image Overlaid on Video
      </h3>
      <p>
      Look for the watermark in the upper left or north east corner of the iamge.
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
