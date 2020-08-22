import React, {useEffect} from "react";
import { Route, Redirect, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {findUser} from "../../redux/action-creators/user"
import Favorites from "../favorites/Favorites"
import "./Profile.scss"

export default () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const user = useSelector(store => store.user.user)
    const searchUser = useSelector(store => store.user.searchUser)
    
    useEffect(() => {
        dispatch(findUser(id))
      }, [id]);
    
    return (
      <div id="profile" className="container">
        <h2>{searchUser.username}</h2>
        <h4>Favorites</h4>
          {searchUser.favs ? (<Favorites favs={searchUser.favs}/>):(null)}
      </div>
    );
  };