import React from "react";
import "./App.css";
import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Cards from "./components/cards/Cards";
import Info from "./components/info_part/Info";
import Footer from "./components/footer/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>

      <Cards />
      <hr className="hr" />
      <Info />

      <Footer />
    </div>
  );
}

export default App;
