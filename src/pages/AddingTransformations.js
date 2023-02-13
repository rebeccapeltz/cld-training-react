import AddingTransformations from "../components/AddingTransformations";
import Experiment from "../components/experiments";

function AddingTransformationsPage() {
 
  return (
    <div className={"mr-2"}>
      <h1
        className={
          "font-medium leading-tight text-4xl mt-0 mb-2 text-white-600"
        }
      >
        Adding Transformations
      </h1>

      <AddingTransformations />
    </div>
  );
}

export default AddingTransformationsPage;
