import React from "react";
import NavbarContainer from "../navbar/NavbarContainer"
import Superheros from "../superheros/Superheros";
import { Route, Redirect, Switch } from 'react-router-dom';
import Character from "../character/Character";
import Register from "../register/Register";
import Login from "../login/Login";
import "./Main.scss"

export default () => {
    return (
      <div id="main">
          <NavbarContainer/>
          <Switch>
            <Route path="/Home" component={Superheros}/>
            <Route path="/character/:id" component={Character}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Redirect from="/" to="/home"/>
          </Switch>
      </div>
    );
  };