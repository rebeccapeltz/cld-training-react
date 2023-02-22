import "../App.css";
import React, { useEffect, useState } from "react";
import UploadWidgetSyntax from "./UploadWidgetSyntax";

export default function UploadWidget() {
  const [loaded, setLoaded] = useState(false);
  const [cloudName, setCloudName] = useState("cloudinary-training");
  const [unsignedPreset, setUnsignedPreset] = useState("vpy7udvq");
  const [uploadedImage, setUploadedImage] = useState("");

  useEffect(() => {
    const cldScript = document.getElementById("cloudinaryUploadWidgetScript");
    // if window is defined and script is not loaded and not in window add script
    if (typeof window !== "undefined" && !loaded && !cldScript) {
      const script = document.createElement("script");
      script.setAttribute("async", "");
      script.setAttribute("id", "cloudinaryUploadWidgetScript");
      script.src = "https://widget.cloudinary.com/v2.0/global/all.js";
      //   script.src = "https://upload-widget.cloudinary.com/global/all.js";
      script.addEventListener("load", () => setLoaded(true));
      document.body.appendChild(script);
    }
  }, [loaded]);
  const processResults = (error, result) => {
    if (error) {
      console.log("error", error);
    }
    if (result && result.event === "success") {
      console.log(result);
      console.log("success", result.info.secure_url);
      setUploadedImage(result.info.secure_url);
      debugger
    }
  };
  const uploadWidget = () => {
    console.log(cloudName, unsignedPreset);
    // debugger;
    window.cloudinary.openUploadWidget(
      {
        cloudName: cloudName,
        uploadPreset: unsignedPreset,
        sources: ["local", "url"],
      },
      processResults
    );
  };

  return (
    <div>
      <h3
       className={
        "font-sans font-medium leading-tight text-3xl mt-0 mb-2 text-clddarkblue"
      }
      >
        Upload Widget with Unsigned Preset
      </h3>
      <UploadWidgetSyntax />
      <p className={"font-sans text-clddarkblue"}>Get more information on creating an <a style={{color:"clddarkblue", "textDecoration":"underline"}} href="https://cloudinary.com/documentation/upload_widget#unsigned_uploads">Unsigned Preset</a></p>
      <br/>
      <form className="w-full max-w-sm">
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="font-sans block text-clddarkblue font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-cloud-name"
            >
              Cloud Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="bg-cldblue appearance-none border-2 border-cldlightblue rounded w-full py-2 px-4 text-cldgray leading-tight focus:outline-none focus:bg-white focus:border-cldblue"
              id="inline-cloud-name"
              type="text"
              value={cloudName}
              onChange={(e) => setCloudName(e.target.value)}
            />
          </div>
        </div>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label
              className="font-sans block text-clddarkblue font-bold md:text-right mb-1 md:mb-0 pr-4"
              htmlFor="inline-unsigned-preset"
            >
              Unsigned Preset
            </label>
          </div>
          <div className="md:w-2/3">
            <input
              className="font-sans bg-cldblue appearance-none border-2 border-cldlightblue rounded w-full py-2 px-4 text-cldgray leading-tight focus:outline-none focus:bg-white focus:border-cldlightblue"
              id="inline-unsigned-preset"
              type="text"
              value={unsignedPreset}
              onChange={(e) => setUnsignedPreset(e.target.value)}
            />
          </div>
        </div>

        <div className="md:flex md:items-center">
          <div className="md:w-1/3"></div>
          <div className="md:w-2/3">
            <button
              className="font-sans shadow bg-cldblue hover:bg-cldblue focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
              type="button"
              onClick={uploadWidget}
            >
              Upload File
            </button>
            <img src={uploadedImage} onLoad={(event) => event.target.style.display = 'inline-block'} onError={(event) => event.target.style.display = 'none'} alt="uploaded using the upload widget" />
          </div>
        </div>
      </form>
    </div>
  );
}
