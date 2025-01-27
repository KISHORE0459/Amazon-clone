import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./components/Home";
import Nav from "./components/Nav";
import ProductPage from "./components/ProductPage";
import { useState } from "react";
import "./index.css";
import "./App.css";
import Navbottom from "./components/Navbottom";

const App = () => {
  const [user, setUser] = useState({
    name: "kishore",
    address: "535/4 , naidu street , mambalapattu",
    city: "Villupuram",
    state: "Tamilnadu",
    country: "india",
    pincode: 605302,
    countrycode: "IND",
    image:
      "https://www.google.com/imgres?q=png%20india%20flag%20small%20icon&imgurl=https%3A%2F%2Fupload.wikimedia.org%2Fwikipedia%2Fen%2Fthumb%2F4%2F41%2FFlag_of_India.svg%2F1280px-Flag_of_India.svg.png&imgrefurl=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2FFile%3AFlag_of_India.svg&docid=zm2ApXyBVwhkQM&tbnid=wZlZjEgP_YIsmM&vet=12ahUKEwi0rrH_q4uLAxUNyzgGHa2sOUcQM3oECGgQAA..i&w=1280&h=853&hcb=2&ved=2ahUKEwi0rrH_q4uLAxUNyzgGHa2sOUcQM3oECGgQAA",
  });
  return (
    <Router>
      <div id="container">
        <Nav user={user} className="nav" />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/product" element={<ProductPage />} />
        </Routes>
        <Navbottom id="navbottom" />
      </div>
    </Router>
  );
};

export default App;
