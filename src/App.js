import { Routes, Route, BrowserRouter } from "react-router-dom"
import Image from "./pages/Image"
import Video from "./pages/Video"
import Contact from "./pages/Contact"
import Layout from "./components/Layout";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />} >
            <Route path="/" element={<Image />} />
            <Route path="video" element={<Video />} />
            <Route path="contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App



