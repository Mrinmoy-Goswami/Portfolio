import React from "react";
import "./App.css";
import Hellocard from "./components/Hellocard";
import Skills from "./components/Skills";
import Navbar from "./components/Navbar";
import Techstack from "./components/Techstack";
// import Loader from './components/Loader';
import Projects from "./components/Projects";
import Footerbuttons from "./components/Footerbutton";
import daily from "./assets/Daily Bites.png"
import invest from './assets/Investomedium.png'
import beer from './assets/beer.jpg'
import cart from './assets/cart.jpg'
import weather from './assets/weather.jpg'
import oppo from './assets/oppo.png'


function App() {
  return (
    <div className="container0">
      {/* <Loader/> */}
      <Navbar />
      <Hellocard />
      <Skills />
      <Techstack />
      <h2 style={{color:"white", fontSize:"4vw"}}>Projects</h2> 

      <div className="cardContainer">
       
       
        <Projects
          name={"LetsKart"}
          des={"E-commerce website built with ReactJS.Functionalities include product listing,product details,cart functions "}
          image = {cart}
          alt={"LetsKart logo"}
        />
         <Projects
          name={"Investomedium"}
          des={
            " Simple one stop smallcases for investment beginners built with angular+bootstrap."
          }
          alt={"Investomedium logo"}
          image={invest}
        />
        <Projects
          name={"Recetas"}
          des={
            "Recipes web app where one can search recipes from over 200,000 of dishes and cocktails as well."
          }
          image={beer}
          alt={"Recetas Logo"}
        />
         <Projects
          name={"Weather App"}
          des={
            "Weather web App where one can see the weather detail of any place upon search"
          }
          image={weather}
          alt={"Weather App logo"}
        />
         <Projects
          name={"Daily-Bites"}
          des={
            "News app that fetches current news from NEWS API built with ReactJS."
          }
          image={daily}
          alt={"Daily Bites logo"}
        />
        </div>
         <h2 style={{color:"white", fontSize:"4vw"}}>Work Experience so far</h2> 
        <div className="cardContainer">
          <Projects
          name = {"Oppo+OnePlus Official Gamespace Curator"}
          des={"Had a great experience of working with creative writers.Managed forums,wrote community posts.In the internship period of 3 months,I was offered extension of 3 months, twice owing to my punctuality and discipline"}
          image = {oppo}
          alt={""}
          />
      </div>
      <div id="About" className="container1">
        <h3 className="text"> ABOUT </h3>
        <p className="about">
          I am Mrinmoy from Guwahati,Assam.I did my schooling from Assam.Presently pursuing B.Tech CSE in Lovely Professional University,Punjab.
          <br/>
          I build websites which are fast,
          fascinating and fully responsive. I built a few simple projects using
          React JS,Angular,Bootstrap.Presently focusing on React. Moreover I do
          competitive coding in C++. I also have certification in Flutter
          development.Presently seeking internships.
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
