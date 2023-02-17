import "../App.css";
import { Sandpack } from "@codesandbox/sandpack-react";

const multipleImageandVideo = `import {AdvancedImage,AdvancedVideo} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {thumbnail, fill} from "@cloudinary/url-gen/actions/resize";
import {Adjust} from "@cloudinary/url-gen/actions/adjust"; // for contrast
import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";
import {blur, contrast} from "@cloudinary/url-gen/actions/effect";
export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'cloudinary-training'
    }
  }); 
  const cldImage = cld.image('cld-sample').resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face())));
  const cldBlur = cld.image('cld-sample').resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face()))).effect(blur().strength(800));
  const cldContrast = cld.image('cld-sample').resize(thumbnail().width(150).height(150).gravity(focusOn(FocusOn.face()))).adjust(Adjust.contrast().level(100));

  const cldVideo = cld.video('climbing').resize(fill().width(150).height(150).gravity("auto"));
  const cldVideoBlur = cld.video('climbing').resize(fill().width(150).height(150).gravity("auto")).effect(blur().strength(70));
  const cldVideoContrast = cld.video('climbing').resize(fill().width(150).height(150).gravity("auto")).adjust(Adjust.contrast().level(100));

  console.log(cldVideo.toURL());

  return (
    <div>
      <div className={"flex space-x-4"}>
        <AdvancedImage  alt="Sample" cldImg={cldImage} />
        <AdvancedImage  alt="Sample" cldImg={cldBlur} />
        <AdvancedImage  alt="Sample" cldImg={cldContrast} />
      </div>
      <div>
        <AdvancedVideo controls cldVid={cldVideo} />
        <AdvancedVideo controls cldVid={cldVideoBlur} />
        <AdvancedVideo controls cldVid={cldVideoContrast} />
      </div>
    </div>
  )
}`;

const multipleImages = `import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
// import {focusOn} from "@cloudinary/url-gen/qualifiers/gravity";
// import {FocusOn} from "@cloudinary/url-gen/qualifiers/focusOn";
import {thumbnail} from "@cloudinary/url-gen/actions/resize";
import {Effect} from "@cloudinary/url-gen/actions/effect";
export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  }); 
  const cldImage = cld.image('cld-sample').resize(thumbnail().width(150).height(150).gravity("face"));
  const cldGrayScale = cld.image('cld-sample').resize(thumbnail().width(150).height(150).gravity("face")).effect(Effect.grayscale());
  const cldSepia = cld.image('cld-sample').resize(thumbnail().width(150).height(150).gravity("face")).effect(Effect.sepia());
  const cldBlackWhite = cld.image('cld-sample').resize(thumbnail().width(150).height(150).gravity("face")).effect(Effect.blackwhite());


  return (
    <div className={"flex space-x-4"}>
      <AdvancedImage height="300px" width="auto" alt="Sample" cldImg={cldImage} />
      <AdvancedImage height="300px" width="auto" alt="Sample" cldImg={cldGrayScale} />
      <AdvancedImage height="300px" width="auto" alt="Sample" cldImg={cldSepia} />
      <AdvancedImage height="300px" width="auto" alt="Sample" cldImg={cldBlackWhite} />

    </div>
  )
}`;
const multipleVideos = `import {AdvancedVideo} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";
// import {Effect} from "@cloudinary/url-gen/effect";
import { VideoEdit, trim, preview} from "@cloudinary/url-gen/actions/videoEdit";

import {Effect} from "@cloudinary/url-gen/actions/effect";
export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'cloudinary-training'
    }
  });
  const cldVideo = cld.video('purple-hourglass').resize(fill().width(350).height(350).gravity("auto"));;
  const cldVideoReverse = cld.video('purple-hourglass').resize(fill().width(350).height(350).gravity("auto")).effect(Effect.reverse());
  const cldVideoBoomerang = cld.video('purple-hourglass').resize(fill().width(350).height(350).gravity("auto")).effect(Effect.boomerang());
  const cldVideoBarneysFirstCar = cld.video('video-trn/barneys-first-car');
  const cldVideoPreview = cld.video('video-trn/barneys-first-car').videoEdit(VideoEdit.preview());

  return (
    <div>
      <p> <a target="_blank" href={cldVideo.toURL()}>{cldVideo.toURL()}</a></p>
      <AdvancedVideo controls cldVid={cldVideo} />
      <p> <a target="_blank" href={cldVideoReverse.toURL()}>{cldVideoReverse.toURL()}</a></p>
      <AdvancedVideo controls cldVid={cldVideoReverse} />
      <p> <a target="_blank" href={cldVideoBoomerang.toURL()}>{cldVideoBoomerang.toURL()}</a></p>
      <AdvancedVideo controls cldVid={cldVideoBoomerang} />
      <p> <a target="_blank" href={cldVideoBarneysFirstCar.toURL()}>{cldVideoBarneysFirstCar.toURL()}</a></p>
      <AdvancedVideo controls cldVid={cldVideoBarneysFirstCar} />
      <p> <a target="_blank" href={cldVideoPreview.toURL()}>{cldVideoPreview.toURL()}</a></p>
      <AdvancedVideo controls cldVid={cldVideoPreview} />
    </div>
  )
}`;

export default function Effects() {
  return (
    <div className="code-container">
      <h2
        className={
          "font-medium leading-tight text-4xl mt-0 mb-2 text-white-600"
        }
      >
        Effects
      </h2>

      <h3
        className={
          "font-medium leading-tight text-3xl mt-0 mb-2 text-white-600"
        }
      >
        Apply Effects to both Image and Video: blur and contrast
      </h3>
      <p>Apply blur and contrast effects to Images and Videos</p>
      <Sandpack
        // You can change these examples!
        // Try uncommenting any of these lines
        theme="dark"
        // theme="light"
        // theme="auto"
        template="react"
        files={{
          "/App.js": multipleImageandVideo,
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
          "font-medium leading-tight text-3xl mt-0 mb-2 text-white-600"
        }
      >
        Video Only Effects: Grayscale, Sepia, Black and White
      </h3>
      <Sandpack
        // You can change these examples!
        // Try uncommenting any of these lines
        theme="dark"
        // theme="light"
        // theme="auto"
        template="react"
        files={{
          "/App.js": multipleImages,
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
          editorHeight: 300, // default - 300
          // editorWidthPercentage: 60, // default - 50
          autorun: false,
          recompileMode: "delayed", //default is immediate
          recompileDelay: 300,
          resizablePanels: true, //default
        }}
      />
       <h3
        className={
          "font-medium leading-tight text-3xl mt-0 mb-2 text-white-600"
        }
      >
        Video Only Effects: Reverse, Boomerang, Preview
      </h3>
      <Sandpack
        // You can change these examples!
        // Try uncommenting any of these lines
        theme="dark"
        // theme="light"
        // theme="auto"
        template="react"
        files={{
          "/App.js": multipleVideos,
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
          editorHeight: 500, // default - 300
          // editorWidthPercentage: 60, // default - 50
          autorun: false,
          recompileMode: "delayed", //default is immediate
          recompileDelay: 300,
          resizablePanels: true, //default
        }}
      />
    </div>
  );
}
