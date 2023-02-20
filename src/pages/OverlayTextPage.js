import React from "react";
import OverlayText from "../components/OverlayText";

function OverlayTextPage() {
  console.log("overlay text")
  return (
    <div>
      <h1 className={"font-sans font-medium leading-tight text-4xl mt-0 mb-2 text-white-600"} >Overlay With Text</h1>
      <OverlayText />
    </div>
  );
}

export default OverlayTextPage;
