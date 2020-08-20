import React, {useEffect} from "react";
import { Route, Redirect, Switch } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import {searchSuperhero} from "../../redux/action-creators/superhero"
import Radar from "../radar/Radar"
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
          <div className="row">
              <div className="col-12 col-sm-12 col-md-4 col-lg-4 col-xl-4">
              <h2>{superhero.name}</h2>
                {superhero.image ? <img src={superhero.image.url}/>:null}
              </div>
              {superhero.name ? 
              (<div className="col-12 col-sm-12 col-md-8 col-lg-8 col-xl-8">
                <div style={{maxWidth:"100%"}}>
                <h4>Biography</h4>
                <p><span>Full name: </span>{superhero.biography["full-name"] ? superhero.biography["full-name"] : superhero.name}</p>
                <p><span>First appearance: </span>{superhero.biography["first-appearance"]}</p>
                <p><span>Alignment: </span>{superhero.biography["alignment"]}</p>
                <p><span>Aliases: </span>{superhero.biography["aliases"].toString()}</p>
                <p><span>Groups: </span>{superhero.connections["group-affiliation"]}</p>
                <h4>Power-stats</h4>
                <div id="radar"><Radar characterData={superhero.powerstats}/></div>
                </div>
              </div>) : null}
          </div>
      </div>
    );
  };