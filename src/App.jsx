import React from  "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Project from "./components/Project";
import Footer from "./components/Footer";
import Contact from "./components/Contact";
import { Toaster } from "react-hot-toast";
import Technical from "./components/Techinical";
import Resume from "./components/resume";
function App() {
  return (
    <>
      {/* Added bg-slate-950 for a deep dark look and text-white for readability */}
      <div className="bg-slate-950 text-white min-h-screen">
        <Navbar />
        <Home />
        <About />
         <Project /> 
        <Technical />
        <Contact/>
        <Resume/>
        <Footer/>
      </div>
      <Toaster />
    </>
  );
}

export default App;

