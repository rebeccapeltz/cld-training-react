import { Routes, Route, BrowserRouter } from "react-router-dom";
import AddingTransformationsPage from "./pages/AddingTransformations";
import Image from "./pages/Image";
import Video from "./pages/Video";
import ResizeScale from "./pages/ResizeScale";
import Responsive from "./pages/Responsive";
import LazyLoad from "./pages/Lazyload";
import Accessibility from "./pages/Accessibility";
import Placeholder from "./pages/Placeholder";
import Layout from "./components/Layout";
import Introduction from "./pages/Introduction";
import UrlGen from "./pages/UrlGen";
import ResizeCropGravityPage from "./pages/ResizeCropGravity";
import QualityPage from "./pages/QualityPage";
import FormatPage from "./pages/FormatPage";
import Format from "./pages/Format";
import OptimizePage from "./pages/OptimizePage";
import OverlayImagePage from "./pages/OverlayImagePage";
import OverlayTextPage from "./pages/OverlayTextPage";

import OverlayVideo from "./pages/OverlayVideo";
import VideoOnly from "./pages/VideoOnly";
import UploadWidgetPage from "./pages/UploadWidget";
import PadWithBackgroundPage from "./pages/PadWithBackground";
import RenderingAdvancedImagePage from "./pages/RenderingAdvancedImage";
import RenderingAdvancedVideoPage from "./pages/RenderingAdvancedVideo";
import EffectsPage from "./pages/EffectsPage";


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Introduction />} />
            <Route path="/uw" element={<UploadWidgetPage />} />

            {/* <Route path="/cloudinary-class" element={<CloudinaryClass />} /> */}
            <Route path="/url-gen" element={<UrlGen />} />
            <Route path="/advanced-video" element={<RenderingAdvancedVideoPage />} />
            <Route
              path="/resize-crop-gravity"
              element={<ResizeCropGravityPage />}
            />
            <Route path="/quality" element={<QualityPage />} />
            <Route path="/format" element={<FormatPage />} />
            <Route path="/format" element={<Format />} />
            <Route path="/optimize" element={<OptimizePage />} />
            <Route path="advanced-image" element={<RenderingAdvancedImagePage />} />
            <Route path="advanced-video" element={<RenderingAdvancedVideoPage />} />


            <Route
              path="/adding-transformations"
              element={<AddingTransformationsPage />}
            />
            <Route path="/image" element={<Image />} />
            <Route path="/video" element={<Video />} />
            <Route path="/resize-scale" element={<ResizeScale />} />
            <Route path="/effects" element={<EffectsPage />} />
            <Route path="/overlay-video" element={<OverlayVideo />} />
            <Route path="/overlay-image" element={<OverlayImagePage />} />
            <Route path="/overlay-text" element={<OverlayTextPage />} />
            <Route path="/video-only" element={<VideoOnly />} />

            <Route path="/resize-scale" element={<ResizeScale />} />
            <Route path="/pad-with-background" element={<PadWithBackgroundPage />} />

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
