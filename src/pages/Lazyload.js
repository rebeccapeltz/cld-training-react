import { CloudinaryImage } from "@cloudinary/url-gen";
import { AdvancedImage, lazyload } from "@cloudinary/react";
import { crop } from "@cloudinary/url-gen/actions/resize";
import { autoGravity } from "@cloudinary/url-gen/qualifiers/gravity";
import SyntaxHighlighter from "react-syntax-highlighter";
import { docco } from "react-syntax-highlighter/dist/esm/styles/hljs";

function LazyLoad() {
  const brownSheep = new CloudinaryImage("brown_sheep", { cloudName: "demo" });
  brownSheep.resize(crop().width(400).height(400).gravity(autoGravity()));
  const woman = new CloudinaryImage("woman", { cloudName: "demo" });
  woman.resize(crop().width(400).height(400).gravity(autoGravity()));
  const cat = new CloudinaryImage("fat_cat", { cloudName: "demo" });
  cat.resize(crop().width(400).height(400).gravity(autoGravity()));
  const bear = new CloudinaryImage("bear", { cloudName: "demo" });
  bear.resize(crop().width(400).height(400).gravity(autoGravity()));

  const codeString = `
  const brownSheep = new CloudinaryImage("brown_sheep", { cloudName: "demo" });
  brownSheep.resize(crop().width(400).height(400).gravity(autoGravity()));
  const woman = new CloudinaryImage("woman", { cloudName: "demo" });
  woman.resize(crop().width(400).height(400).gravity(autoGravity()));
  const cat = new CloudinaryImage("fat_cat", { cloudName: "demo" });
  cat.resize(crop().width(400).height(400).gravity(autoGravity()));
  const bear = new CloudinaryImage("bear", { cloudName: "demo" });
  bear.resize(crop().width(400).height(400).gravity(autoGravity()));
  return (
    <p
            style={{
            "margin-top": "1rem",
            "font-family": "courier",
            "background-color": "black",
            color: "white",
            }}
        >
            {const brownSheep = new CloudinaryImage("brown_sheep", { cloudName: "demo" });}
        </p>
        <p
            style={{
            "font-family": "courier",
            "background-color": "black",
            color: "white",
            }}
        >
            {brownSheep.resize(crop().width(400).height(400).gravity(autoGravity()));}
        </p>
        <p
            style={{
            "font-family": "courier",
            "background-color": "black",
            color: "white",
            }}
        >
            {<AdvancedImage style={{ display: "block", "marginTop": "600px", width: "400px", height: "400px" }} cldImg={brownSheep} plugins={[lazyload({ rootMargin: '20px 20px 20px 20px', threshold: 0.25 })]} />}
        </p>

        <AdvancedImage
            style={{
            display: "block",
            marginTop: "600px",
            width: "400px",
            height: "400px",
            }}
            cldImg={brownSheep}
            plugins={[
            lazyload({ rootMargin: "20px 20px 20px 20px", threshold: 0.25 }),
            ]}
        />
        <AdvancedImage
            style={{
            display: "block",
            marginTop: "600px",
            width: "400px",
            height: "400px",
            }}
            cldImg={cat}
            plugins={[
            lazyload({ rootMargin: "20px 20px 20px 20px", threshold: 0.25 }),
            ]}
        />
        <AdvancedImage
            style={{
            display: "block",
            marginTop: "600px",
            width: "400px",
            height: "400px",
            }}
            cldImg={woman}
            plugins={[
            lazyload({ rootMargin: "20px 20px 20px 20px", threshold: 0.25 }),
            ]}
        />
        <AdvancedImage
            style={{
            display: "block",
            marginTop: "600px",
            width: "400px",
            height: "400px",
            }}
            cldImg={bear}
            plugins={[
            lazyload({ rootMargin: "20px 20px 20px 20px", threshold: 0.25 }),
            ]}
        />
        )
  `;

  return (
    <div className={"mr-2"}>
      <h1
        className={"font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600"}
      >
        Plugins: Lazyload
      </h1>
      <h3>Scroll down to see images lazyload</h3>
      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title text-xl font-medium">
          Click to view/hide code
        </div>
        <div className="collapse-content">
          <div>
            <SyntaxHighlighter language="javascript" style={docco}>
              {codeString}
            </SyntaxHighlighter>
          </div>
        </div>
      </div>

      <AdvancedImage
        style={{
          display: "block",
          marginTop: "600px",
          width: "400px",
          height: "400px",
        }}
        cldImg={brownSheep}
        plugins={[
          lazyload({ rootMargin: "20px 20px 20px 20px", threshold: 0.25 }),
        ]}
      />
      <AdvancedImage
        style={{
          display: "block",
          marginTop: "600px",
          width: "400px",
          height: "400px",
        }}
        cldImg={cat}
        plugins={[
          lazyload({ rootMargin: "20px 20px 20px 20px", threshold: 0.25 }),
        ]}
      />
      <AdvancedImage
        style={{
          display: "block",
          marginTop: "600px",
          width: "400px",
          height: "400px",
        }}
        cldImg={woman}
        plugins={[
          lazyload({ rootMargin: "20px 20px 20px 20px", threshold: 0.25 }),
        ]}
      />
      <AdvancedImage
        style={{
          display: "block",
          marginTop: "600px",
          width: "400px",
          height: "400px",
        }}
        cldImg={bear}
        plugins={[
          lazyload({ rootMargin: "20px 20px 20px 20px", threshold: 0.25 }),
        ]}
      />
    </div>
  );
}
export default LazyLoad;
