import React from "react";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle';
import { Route, Routes  } from 'react-router-dom';
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";
import Error from "./Error";
import Navbar from "./Navbar";
import FooterComponent from "./FooterComponent";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route exact path="/" element={<Home name="Home" />} />
        <Route exact path="/about" element={<About name="About" />} />
        <Route exact path="/service" element={<Service name="Service" />} />
        <Route exact path="/contact" element={<Contact name="Contact" />} />
        <Route exact path="*" element={<Error />} />
      </Routes>
      <FooterComponent />
    </>
  );
}

export default App;

