import React from "react";
import Cakes from "./cakes";
import "./App.scss";
import Navbar from "./Components/navbar/navbar";
import SearchBar from "./Components/Searchbar/Searchbar";
import Carousel from "./Components/Carousel/Carousel";

// const navbarData = [
//   {
//     name: 'home',
//     onclick:
//   }
// ]
const App = () => {
  return (
    <div className="App">
      <div className="Top-container">
        <Navbar />
        <SearchBar/>
      </div>
      <div className="bottom-carousel-container">
          <Carousel/>
        </div>
    </div>
  );
};

export default App;
