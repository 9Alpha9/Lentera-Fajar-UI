import React from "react";
import NavBar from "./Components/navbarComponents/NavBar";
import ContentWrapper from "./Components/mainComponents/ContentWrapper";
import FooterLayout from "./Components/FooterComponents/FooterComponent";
import './App.css';
import MapsGoogle from "./Components/MapsComponent/MapsGoogle";
import HeaderWrapper from "./Components/headerComponents/HeaderWrapper";

function App() {
  return (
   <React.Fragment>
      <NavBar />
      <HeaderWrapper />
      <ContentWrapper />
      <MapsGoogle />
      <FooterLayout />
   </React.Fragment>
  );
}

export default App;
