import React from "react";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import Headlinecards from "./components/headlinecards/Headlinecards";
import Food from "./components/food/Food";
import Category from "./components/category/Category";

function App() {
  return (
    <div>
     <Navbar/> 
     <Hero/>
     <Headlinecards/>
     <Food/>
     <Category/>
    </div>
  );
}

export default App;
