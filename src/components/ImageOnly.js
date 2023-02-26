import "../App.css";
import Experiment from "./experiments";
import SandpackWrapper from "./SandpackWrapper";

const cloudinaryAdvancedImage = `import {AdvancedImage} from '@cloudinary/react';
import {Cloudinary} from "@cloudinary/url-gen";
import {fill} from "@cloudinary/url-gen/actions/resize";
import { Delivery, defaultImage} from "@cloudinary/url-gen//actions/delivery";

export default function App() {
  const cld = new Cloudinary({
    cloud: {
      cloudName: 'cloudinary-training'
    }
  }); 
  // the "non_existing_id.png" does not exist and the alt string will show when rendered
  const image = cld.image('non_existing_id.png');
  // create a placeholder for the image in case the image isn't found
  const avatarDefaultImage = cld.image('non_existing_id.png')
    .delivery(defaultImage("placeholders:avatar.png"));
 
  return (
    <div>
      <div style={{display:"flex", justifyContent: "space-between"}}>
        <AdvancedImage style={{display:"block"}} cldImg={image} alt="non existent image" />
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
          "font-sans font-medium leading-tight text-2xl mt-0 mb-2 text-clddarkblue"
        }
      >
        Image Only Transformations
      </h2>{" "}
      <p className="font-sans text-clddarkblue">
        Find the{" "}
        <a
          className={"underline"}
          href="https://cloudinary.com/documentation/transformation_reference"
          target="_blank"
          rel="noreferrer"
        >
          Transformation URL API Reference
        </a>{" "}
        in the documentation. If you need help figuring out which functions to
        import to get the transformation working, consult this{" "}
        <a
          className={"underline"}
          href="https://codesandbox.io/s/github/cloudinary-devs/cld-react-sdk-docs-examples/tree/main/?from-embed&initialpath=%2Fimages"
        >
          codesandbox
        </a>{" "}
        and the{" "}
        <a
          className={"underline"}
          href="https://github.com/cloudinary/js-url-gen/blob/master/__TESTS__/compilationsOutput.test.ts"
          target="_blank"
          rel="noreferrer"
        >
          compilation test
        </a>{" "}
         in the open source url-gen code.
      </p>
      <Experiment
        codeString={``}
        experimentTitle={
          `Discover and experiment with transformations that can only be applied to images`
        }
        instructions={[
          `Find "image only" transformation in the documention`,
          `Write code to render them`,
          `Remember to import the functions the image transformations require`,
        ]}
      />
      <SandpackWrapper numberOnPage="1" scriptName={cloudinaryAdvancedImage} />
    </div>
  );
}
