import React from "react";
import "./App.css";
import Hellocard from "./components/Hellocard";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Techstack from "./components/Techstack";
// import Loader from './components/Loader';
import Projects from "./components/Projects";
import Footerbuttons from "./components/Footerbutton";

function App() {
  return (
    <div className="container0">
      {/* <Loader/> */}
      <Navbar />
      <Hellocard />
      <Skills />
      <Techstack />
      <div className="cardContainer">
        <Projects
          name={"Daily-Bites"}
          des={
            "News app that fetches current news from NEWS API built with ReactJS."
          }
          image={"Daily Bites.png"}
          alt={"Daily Bites logo"}
        />
        <Projects
          name={"Investomedium"}
          des={
            " Simple one stop smallcases for investment beginners built with angular+bootstrap."
          }
          alt={"Investomedium logo"}
          image={"Investomedium.png"}
        />
        <Projects
          name={"LetsKart"}
          des={"E-commerce website built with ReactJS."}
          alt={"LetsKart logo"}
        />
      </div>
      <div id="About" className="container1">
        <h3 className="text"> ABOUT </h3>
        <p className="about">
          I am Mrinmoy from Guwahati,Assam. I build websites which are fast,
          fascinating and fully responsive. I built a few simple projects using
          React JS,Angular,Bootstrap.Presently focusing on React. Moreover I do
          competitive coding in C++. I also have certification in Flutter
          development. Presently in the 3rd year of my college.Absolutely
          excited for collaborations/internships.
        </p>
      </div>
      <div id="Contact" className="container1">
        <Footerbuttons
          phone={"8638709407"}
          mail={"mrinmoygoswami777@gmail.com"}
        />
      </div>
    </div>
  );
}

export default App;
