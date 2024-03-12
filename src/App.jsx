import { BrowserRouter, Routes,Route } from "react-router-dom"
import Footer from "./Components/Footer"
import Home from "./Components/Home"
import About from "./Components/About"
import ServicePage from "./Components/ServicePage"
import Contact from "./Components/Contact"
import Testimonial from "./Components/Testimonial"
import Features from "./Components/Features"
import Projects from "./Components/Projects"
import Members from "./Components/Members"

function App() {
 
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/service" element={<ServicePage/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/member" element={<Members/>} />
        <Route path="/projects" element={<Projects/>} />
        <Route path="/features" element={<Features/>} />
        <Route path="/testimonial" element={<Testimonial/>} />
      </Routes>
      <Footer />
    </BrowserRouter>
     
    </>
  )
}

export default App
