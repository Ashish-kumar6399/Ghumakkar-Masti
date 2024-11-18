
import React from "react";
import Ghumkar from "./Ghumkar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import About from "./About";
import Hotel_Resturants from "./Hotel_Resturants";
import Transport from "./Transport";
import Book_Now from "./Book_Now";
import Contact_us from "./Contact_us";
import Tour_packages from "./Tour_packages"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Ghumkar />}/>
        <Route path="/about" element={<About />}/>
        <Route path="/hotels" element={<Hotel_Resturants />}/>
        <Route path="/transport" element={<Transport />}/>
        <Route path="/book_now" element={<Book_Now />}/>
        <Route path="/contact" element={<Contact_us/>}/>
        <Route path="/tour_packages" element={<Tour_packages/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
