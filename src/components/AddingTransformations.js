import "../App.css";
import { Sandpack } from "@codesandbox/sandpack-react";
import Experiment from "./experiments";

const cloudinaryAdvancedImage = `import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {Transformation} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";
import {outline, cartoonify} from "@cloudinary/url-gen/actions/effect";

export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'cloudinary-training'
    }
  }); 
  const myImage = cld.image('cld-sample').resize(fill().width(350).height(350).gravity("auto"));
  return (
    <div>
      <AdvancedImage cldImg={myImage.effect(cartoonify())} />
    </div>
  )
}`;

export default function AddingTransformations() {
  const experimentString1 = `
  // apply the transformation to the existing image object
    return (
        <div>
          <AdvancedImage cldImg={myImage.effect(cartoonify())} />
          <AdvancedImage cldImg={myImage.effect(outline())} />
        </div>
      )
  // create a new object and apply the outline to the new object
    const myImage2 = cld.image('cld-sample').resize(fill().width(350).height(350).gravity("auto"));
      return (
        <div>
          <AdvancedImage cldImg={myImage.effect(cartoonify())} />
          <AdvancedImage cldImg={myImage2.effect(outline().width(1))} />
        </div>
      )
    `;
  const experimentTitle1 =
    "Experiment by creating a second AdvancedImage that uses the same Image variable.";
  const instructions1 = [
    "Start by running the code.",
    "Then make a copy of the AdvancedImage component directive. In the second AdvancedImage Element use the outline effect.",
    "Notice that the effect was applied to both rendered images.",
    "Now create a new image object and apply the outline to the new object.",
  ];

  return (
    <div className="code-container">
      <h3
        className={
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Adding a Transformation to an Image Instance
      </h3>
      <p className="font-sans mt-1 mb-1 text-clddarkblue">
        Both new <span className={"font-bold"}>Cloudinary.image()</span> and{" "}
        <span className={"font-bold"}>new CloudinaryImage()</span> instantiate
        objects that are mutable. While there is no way to remove a
        transformation from an image instance, if you modify the instance by
        adding a url-gen action, you will see all renderings of your instance
        updated with the new transformation added on to it. If you want to
        create a new transformation without affecting or adding to an existing
        transformation, create a new instance of{" "}
        <span className={"font-bold"}>Cloudinary.image</span> or
        <span className={"font-bold"}> CloudinaryImage</span>.
      </p>
      <Experiment
        codeString={experimentString1}
        experimentTitle={experimentTitle1}
        instructions={instructions1}
      />
      <Sandpack
        // You can change these examples!
        // Try uncommenting any of these lines
        theme="dark"
        // theme="light"
        // theme="auto"
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
