import LazyloadPlugin from "../components/LazyloadPlugin";

function Plugins() {
    return (
      <div className={'mr-2'}>
        <h1 className={'font-medium leading-tight text-4xl mt-0 mb-2 text-blue-600'}>Plugins: Lazyload</h1>
        <LazyloadPlugin />
      </div>
    );
  }
  
  export default Plugins;