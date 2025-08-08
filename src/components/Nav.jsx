import React from "react";
import piggy from "../assets/porco.png"; 

const Nav = () => {
  return (
    <div className="ui menu">
      <div className="header item">
        <span className="headerText">HogWild</span>
      </div>
      <div className="TwirlyPig">
        <img src={piggy} className="App-logo" alt="A cute pig spinning around in a whimsical way" />
      </div>
      <div className="normalText item">A React App for County Fair Hog Fans</div>
    </div>
  );
};

export default Nav;


