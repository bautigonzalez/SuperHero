import React from "react";
import NavbarContainer from "../navbar/NavbarContainer"
import Superheros from "../superheros/Superheros";
import { Route, Redirect, Switch } from 'react-router-dom';
import Character from "../character/Character";
import "./Main.scss"

export default () => {
    return (
      <div id="main">
          <NavbarContainer/>
          <Switch>
            <Route path="/Home" component={Superheros}/>
            <Route path="/character/:id" component={Character}/>
            <Redirect from="/" to="/home"/>
          </Switch>
      </div>
    );
  };