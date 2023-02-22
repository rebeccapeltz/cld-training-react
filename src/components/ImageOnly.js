import "../App.css";
import { Sandpack } from "@codesandbox/sandpack-react";

const cloudinaryAdvancedImage = `import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";
import { Delivery, defaultImage} from "@cloudinary/url-gen//actions/delivery";

export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'demo'
    }
  }); 
  const image = cld.image('non_existing_id.png');
  const avatarDefaultImage = cld.image('non_existing_id.png')
    .delivery(defaultImage("docs:placeholders:samples:avatar.png"));
 
  return (
    <div>
      <div style={{display:"flex", justifyContent: "space-between"}}>
        <AdvancedImage style={{display:"block"}} cldImg={image} alt="non existent" />
        <AdvancedImage style={{display:"block"}} cldImg={avatarDefaultImage} alt="default image" />
      </div>
    </div>
  )
}`;

export default function ImageOnly() {
  return (
    <div className="code-container">
      <h2
       className={
        "font-sans font-medium leading-tight text-3xl mt-0 mb-2 text-white"
      }
      >
        Image Only Transformations
      </h2>{" "}
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
          editorHeight: 500, // default - 300
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
