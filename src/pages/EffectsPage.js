import React from "react";
import Effects from "../components/Effects";

function EffectsPage() {
  return (
    <div>
      <h1>Effects</h1>
      <p>There are many effects! In a URL they all begin with <span class="font-bold">e_</span>. Some effects 
      can be are exclusive to either images for video, while many can be used on both image and video.</p>
      <Effects />
    </div>
  );
}

export default EffectsPage;
