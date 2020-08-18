import React from "react";
import NavbarContainer from "../navbar/NavbarContainer"
import Superheros from "../superheros/Superheros";
import "./Main.scss"

export default () => {
    return (
      <div id="main">
          <NavbarContainer/>
          <Superheros/>
      </div>
    );
  };