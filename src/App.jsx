import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navber from "./components/Navber";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ProductsMain from "./components/products/ProductsMain";
import PrivicamMain from "./components/Privicam/PrivicamMain";
import WhoWeMain from "./components/WhoWeAre/WhoWeMain";
import ManagementMain from "./components/Management/ManagementMain";
import ContactFormMain from "./components/Contact/ContactFormMain";
import IndustryMani from "./components/Industry/IndustryMani";

function App() {
  return (
    <Router>
      <Navber />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product" element={<ProductsMain/>}/>
        <Route path="/Privicam"element={<PrivicamMain/>}/>
        <Route path="/WhoWeAre"element={<WhoWeMain/> }/>
        <Route path="/Management"element={<ManagementMain/>}/>
        <Route path="/Contact"element={<ContactFormMain/>}/>
        <Route path="/Industry"element={<IndustryMani/>}/>

      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
