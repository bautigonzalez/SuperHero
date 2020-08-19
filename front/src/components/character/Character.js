import React, {useEffect} from "react";
import { Route, Redirect, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {searchSuperhero} from "../../redux/action-creators/superhero"
import "./Character.scss"

export default () => {
    let { id } = useParams();
    const dispatch = useDispatch();
    const superhero = useSelector(store => store.superhero.superhero)

    useEffect(() => {
        dispatch(searchSuperhero(id));
      }, []);
    
    return (
      <div id="character" className="container">
          <h2>{superhero.name}</h2>
          {superhero.image ? <img src={superhero.image.url}/>:null}
      </div>
    );
  };