import PadWithBackground from "../components/PadWithBackground";

function PadWithBackgroundPage() {
    return (
      <div className={'mr-2'}>
                <h1 className={'font-medium leading-tight text-4xl mt-0 mb-2 text-white-600'}>Pad With Background</h1>

        {/* <h1 className={'font-medium leading-tight text-4xl mt-0 mb-2 text-cldblue-600'}>Pad with Background Color</h1> */}
        <p>You can assign a color or use auto to use the predominant color in the image.</p>
        <PadWithBackground />
      </div>
    );
  }
  
  export default PadWithBackgroundPage;