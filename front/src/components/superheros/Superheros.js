import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card"
import "./Superheros.scss"

export default () => {
    const superheros = useSelector(store => store.superhero.superheros)
    const search = useSelector(store => store.superhero.search)
    return (
      <div id="superheros" className="container">
        {superheros.length ? <h3 id="results">Results for "{search}"</h3> : null}
          <div className="row">
                {superheros.length ? (superheros.map((superhero)=>(
                    <Card superhero={superhero} key={superhero.id}/>
                ))) : ("Search your Superheros!")}
          </div>
      </div>
    );{superhero.name}
  };