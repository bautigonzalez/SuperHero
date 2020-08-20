import React from "react";
import NavbarContainer from "../navbar/NavbarContainer"
import Superheros from "../superheros/Superheros";
import { Route, Redirect, Switch } from 'react-router-dom';
import Character from "../character/Character";
import Register from "../register/Register";
import Login from "../login/Login";
import { useDispatch, useSelector } from "react-redux";
import {authenticate} from "../../redux/action-creators/user"
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
            <Route path="/Home" component={Superheros}/>
            <Route path="/character/:id" component={Character}/>
            <Route path="/register" component={Register}/>
            <Route path="/login" component={Login}/>
            <Redirect from="/" to="/home"/>
          </Switch>
      </div>
    );
  };