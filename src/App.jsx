import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage.jsx";
import CatalogPage from "./pages/CatalogPage/CatalogPage.jsx";
import CarDetails from "./components/CarDetails/CarDetails.jsx";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />}></Route>
      <Route path="/catalog" element={<CatalogPage />}></Route>
      <Route path="/catalog/:id" element={<CarDetails />}></Route>
    </Routes>
  );
};

export default App;
