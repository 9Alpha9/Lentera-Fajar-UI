import React from "react";
import NavBar from "./Components/navbarComponents/NavBar";
import HeaDer from "./Components/headerComponents/HeaDer";
import ContentWrapper from "./Components/mainComponents/ContentWrapper";
import FooterLayout from "./Components/FooterComponents/FooterComponent";
import './App.css';

function App() {
  return (
   <React.Fragment>
      <NavBar />
      <HeaDer />
      <ContentWrapper />
      <FooterLayout />
   </React.Fragment>
  );
}

export default App;
