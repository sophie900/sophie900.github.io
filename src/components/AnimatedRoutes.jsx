import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "../pages/Home";
import ArtDesign from "../pages/ArtDesign";

function AnimatedRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/art" element={<ArtDesign />} />
    </Routes>
  );
}

export default AnimatedRoutes;
