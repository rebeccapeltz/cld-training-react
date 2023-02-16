import "../App.css";
import { Sandpack } from "@codesandbox/sandpack-react";

const multipleImageandVideo=`import {AdvancedImage,AdvancedVideo} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {thumbnail, scale} from "@cloudinary/url-gen/actions/resize";
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

  return (
    <div className={"flex space-x-4"}>
        <AdvancedImage  alt="Sample" cldImg={cldImage} />
        <AdvancedImage  alt="Sample" cldImg={cldBlur} />
        <AdvancedImage  alt="Sample" cldImg={cldContrast} />
    </div>
  )
}`

const multipleImages = `
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  }); 
  const cldBlur = cld.image('cld-sample');
  const cldContrast = cld.image('cld-sample');
  return (
    <div>
    <AdvancedImage height="300px" width="auto" alt="Sample Image 1" cldImg={cldBlur} />
    <AdvancedImage height="300px" width="auto" alt="Sample Image 2" cldImg={cldContrast} />
    </div>
  )
}`;
const multipleVideos = `import {AdvancedVideo} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'cloudinary-training'
    }
  }); 
  const cldVideo1 = cld.video('climbing');
  const cldVideo2 = cld.video('climbing');
  return (
    <div>
    <AdvancedVideo height="300px" width="auto" cldVid={cldVideo1} />
    <AdvancedVideo height="300px" width="auto" cldVid={cldVideo2} />

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
      <p>
       Apply blur and contrast effects to Images and Videos
      </p>
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
        Multiple Images
      </h3>
      <p>
        When you are rendering  multiple images in your component, it is more efficient to create a Cloudinary instance, 
        which has an image method that will generate new CloudinaryImage objects for you.  You only have to specify the Cloud Name 
        once when you create a Cloudinary instance.  When you create a new image, you specify the Public ID.
      </p>
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
  );
}
