import ResizeScale from "../components/ResizeScale";

function Home() {
    return (
      <div className={'mr-2'}>
        <h1 className={'font-medium leading-tight text-4xl mt-0 mb-2 text-white-600'}>Scale Images and Video</h1>
        <ResizeScale />
      </div>
    );
  }
  
  export default Home;