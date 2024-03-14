import { useLayoutEffect } from "react";
import Navbar from "./component/Navbar";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Footer from "./component/Footer";
import './App.css';
import AboutUs from "./component/AboutUs";
import ContactUs from "./component/ContactUs";
import CosmeceuticalsProduct from "./component/CosmeceuticalsProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./component/Home";
import OurPrinciplepage from "./component/OurPrinciplepage";
function App() {
  useLayoutEffect(() => {
    AOS.init();
  });
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cosmeceuticals" element ={<CosmeceuticalsProduct/>}/> 
          <Route path="/principle" element ={<OurPrinciplepage/>}/>
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;

