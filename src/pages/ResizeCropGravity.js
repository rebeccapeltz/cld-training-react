import ResizeCropGravity from "../components/ResizeCropGravity";

function ResizeCropGravityPage() {
  return (
    <div className={"mr-2"}>
      <h1
        className={
          "font-medium leading-tight text-4xl mt-0 mb-2 text-white-600"
        }
      >
        Crop with Gravity
      </h1>
      <ResizeCropGravity />
    </div>
  );
}

export default ResizeCropGravityPage;
