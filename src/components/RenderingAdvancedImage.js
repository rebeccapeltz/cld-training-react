import "../App.css";
import { Sandpack } from "@codesandbox/sandpack-react";

const singleImage = `
import {AdvancedImage} from '@cloudinary/react';
import {CloudinaryImage} from "@cloudinary/url-gen";
export default function App() {
  const cldImage = new CloudinaryImage('cld-sample',{cloudName: 'demo'}); 
  return (
    <div>
      <AdvancedImage height="300px" width="auto" alt="Sample Image" cldImg={cldImage} />
    </div>
  )
}`;
const multipleImages = `
import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  }); 
  const cldImage = cld.image('cldSample');
  return (
    <div>
      <img height="300px" width="auto" alt="Sample Image" src={myImageURL} />
    </div>
  )
}`;

export default function RenderingAdvancedImage() {
  return (
    <div className="code-container">
      <h2
        className={
          "font-medium leading-tight text-4xl mt-0 mb-2 text-white-600"
        }
      >
        AdvancedImage
      </h2>

      <h3
        className={
          "font-medium leading-tight text-3xl mt-0 mb-2 text-white-600"
        }
      >
        Single Image
      </h3>
      <p>
        When you are rendering just a single image in your component, you can
        use "CloudinaryImage" and supply both Cloud Name and Public ID.
      </p>
      <Sandpack
        // You can change these examples!
        // Try uncommenting any of these lines
        theme="dark"
        // theme="light"
        // theme="auto"
        template="react"
        files={{
          "/App.js": singleImage,
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
