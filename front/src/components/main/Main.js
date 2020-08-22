import React from "react";
import NavbarContainer from "../navbar/NavbarContainer"
import Superheros from "../superheros/Superheros";
import { Route, Redirect, Switch } from 'react-router-dom';
import Character from "../character/Character";
import Register from "../register/Register";
import Login from "../login/Login";
import { useDispatch, useSelector } from "react-redux";
import {authenticate} from "../../redux/action-creators/user"
import Profile from "../profile/Profile";
import Home from "../home/Home";
import Contact from "../contact/Contact";
import "./Main.scss"

export default () => {
    const dispatch = useDispatch();

    React.useEffect(() => {
      dispatch(authenticate())
  }, []);

    return (
      <div id="main">
          <NavbarContainer/>
          <Switch>
            <Route path="/home" component={Home}/>
            <Route path="/search" component={Superheros}/>
            <Route path="/character/:id" component={Character}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Route path="/users/:id" component={Profile}/>
            <Route path="/contact" component={Contact}/>
            <Redirect from="/" to="/home"/>
          </Switch>
      </div>
    );
  };