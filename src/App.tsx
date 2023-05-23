// Modules
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// Pages
import RegistredPage from "./Pages/RegistredPage/RegistredPage";
import HomePage from "./Pages/HomePage/HomePage";

const App = () => {
  return (
    <BrowserRouter>
      <div className="container">
        <div className="content">
          <Routes>
            <Route path="/registred/" element={<RegistredPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
};

export default App;
