import React, { useState } from "react";
import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import "../src/index.css";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
