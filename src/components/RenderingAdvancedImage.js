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
  const cldImage1 = cld.image('cld-sample');
  const cldImage2 = cld.image('cld-sample');
  return (
    <div>
    <AdvancedImage height="300px" width="auto" alt="Sample Image 1" cldImg={cldImage1} />
    <AdvancedImage height="300px" width="auto" alt="Sample Image 2" cldImg={cldImage2} />
    </div>
  )
}`;

export default function RenderingAdvancedImage() {
  return (
    <div className="code-container">
      <h2
       className={
        "font-sans font-medium leading-tight text-3xl mt-0 mb-2 text-white"
      }
      >
        AdvancedImage: Deliver Image Elements
      </h2>
      <p  className={"font-sans mt-1 mb-1 text-white"}>All Cloudinary assets are delivered via CDN.  This is a big step in optimization. The AdvancedImage component
        creates an HTML5 images elements.  You can include HTML5 image attributes such as width, height and alt.  In addition 
        we'll see how to include plugins that will provide lazy loading,  placeholders,  responsive image, and accessibility. You only 
        need to specify a Cloudinary Cloud Name and Public ID to create an image object.  Once you have that object, you can 
        hand it off to the AdvancedImage component to render it.  </p>

      <h3
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-white"
        }
      >
        Single Image
      </h3>
      <p className={"font-sans mt-1 mb-1 text-white"}>
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
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-white"
        }
      >
        Multiple Images
      </h3>
      <p className={"font-sans mt-1 mb-1 text-white"}>
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
