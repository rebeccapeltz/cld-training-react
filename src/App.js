import { Routes, Route, BrowserRouter } from "react-router-dom";
import TransformationBuilderPage from "./pages/TransformationBuilder";
import Image from "./pages/Image";
import Video from "./pages/Video";
import ResizeScale from "./pages/ResizeScale";
import Responsive from "./pages/Responsive";
import LazyLoad from "./pages/Lazyload";
import Accessibility from "./pages/Accessibility";
import Placeholder from "./pages/Placeholder";
import Layout from "./components/Layout";
import Introduction from "./pages/Introduction";
import CloudinaryPackage from "./pages/CloudinaryPackage";
import UrlGenPackage from "./pages/UrlGenPackage";
import AdvancedImage from "./pages/AdvancedImage";
import AdvancedVideo from "./pages/AdvancedVideo";
import ResizeCropGravity from "./components/ResizeCropGravity";
import Quality from "./pages/Quality";
import Format from "./pages/Format";
import UploadWidget from "./pages/UploadWidget";
import PadBackground from "./pages/PadBackground";
import Effects from "./pages/Effects";
import Optimize from "./pages/Optimize";
import OverlayImage from "./pages/OverlayImage";
import OverlayVideo from "./pages/OverlayVideo";
import OverlayText from "./pages/OverlayText";
import VideoOnly from "./pages/VideoOnly";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Introduction />} />
            <Route path="/uw" element={<UploadWidget />} />

            <Route path="/cloudinary-package" element={<CloudinaryPackage />} />
            <Route path="/url-gen-package" element={<UrlGenPackage />} />
            <Route path="/advanced-image" element={<AdvancedImage />} />
            <Route path="/advanced-video" element={<AdvancedVideo />} />
            <Route
              path="/resize-crop-gravity"
              element={<ResizeCropGravity />}
            />
            <Route path="/quality" element={<Quality />} />
            <Route path="/format" element={<Format />} />
            <Route path="/optimize" element={<Optimize />} />
            <Route path="/pad-background" element={<PadBackground />} />

            <Route
              path="/transformation-builder"
              element={<TransformationBuilderPage />}
            />
            <Route path="/image" element={<Image />} />
            <Route path="/video" element={<Video />} />
            <Route path="/resize-scale" element={<ResizeScale />} />
            <Route path="/Effects" element={<Effects />} />
            <Route path="/overlay-video" element={<OverlayVideo />} />
            <Route path="/overlay-image" element={<OverlayImage />} />
            <Route path="/overlay-text" element={<OverlayText />} />
            <Route path="/video-only" element={<VideoOnly />} />

            <Route path="/resize-scale" element={<ResizeScale />} />


            <Route path="/responsive" element={<Responsive />} />
            <Route path="/placeholder" element={<Placeholder />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/lazyload" element={<LazyLoad />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
