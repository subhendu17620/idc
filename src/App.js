import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbari from "./components/navbar/Navbar";
import Cards from "./components/cards/Cards";
import Info from "./components/info_part/Info";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbari />
      </BrowserRouter>

      <Cards />
      <hr className="hr" />
      <Info />

      <Footer />
    </div>
  );
}

export default App;
