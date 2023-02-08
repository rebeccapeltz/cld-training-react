import { Routes, Route, BrowserRouter } from "react-router-dom"
import Image from "./pages/Image"
import Video from "./pages/Video"
import ResizeScale from "./pages/ResizeScale"
import Responsive from "./pages/Responsive"
import LazyLoad from "./pages/Lazyload"
import Accessibility from "./pages/Accessibility"
import Placeholder from "./pages/Placeholder"
import Contact from "./pages/Contact"
import Layout from "./components/Layout"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<Image />} />
            <Route path="/video" element={<Video />} />
            <Route path="/resize-scale" element={<ResizeScale />} />
            <Route path="/responsive" element={<Responsive />} />
            <Route path="/placeholder" element={<Placeholder />} />
            <Route path="/accessibility" element={<Accessibility />} />
            <Route path="/lazyload" element={<LazyLoad />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



