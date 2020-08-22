import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card"
import {findFav} from "../../redux/action-creators/superhero"

export default ({favs}) => {
    const favSuperheros = useSelector(store => store.superhero.favSuperheros)
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(findFav(favs))
      }, [favs.length]);

    return (
        <div className="row">
            {favSuperheros ? favSuperheros.map((superhero, index)=><Card superhero={superhero} key={index}/>) : null}
        </div>
    );
  };