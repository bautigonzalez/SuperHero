import React, {useEffect} from "react";
import { Route, Redirect, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {findUser} from "../../redux/action-creators/user"
import {findFav} from "../../redux/action-creators/superhero"
import Card from "../card/Card"
import "./Profile.scss"

export default () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user.user)
    const searchUser = useSelector(store => store.user.searchUser)
    let favArray = []

    useEffect(() => {
        dispatch(findUser(id))
        console.log(searchUser.favs)
      }, []);
    
    return (
      <div id="profile" className="container">
        <h2>{searchUser.username}</h2>
        <h4>Favorites</h4>
        <div className="row">
          {searchUser.favs}
        </div>
      </div>
    );
  };