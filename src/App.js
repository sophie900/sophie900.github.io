import React from "react";
import "./App.css";
// import { Routes, Route } from 'react-router-dom';
import AnimatedRoutes from "./components/AnimatedRoutes";

// Components
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="app-all">
      <div className="content-wrap">
        <Navbar />
        <AnimatedRoutes />
      </div>
      <Footer />
    </div>
  );
}

export default App;
