import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../card/Card"
import "./Home.scss"

const seed = [
    {
        name: "Iron Man",
        id: "346",
        image: {url: "https://www.superherodb.com/pictures2/portraits/10/100/85.jpg"},
        powerstats:{
            combat: "64",
            durability: "85",
            intelligence: "100",
            power: "100",
            speed: "58",
            strength: "85"
        }
    },
    {
        name: "Hulk",
        id: "332",
        image: {url: "https://www.superherodb.com/pictures2/portraits/10/100/83.jpg"},
        powerstats:{
            combat: "85",
            durability: "100",
            intelligence: "88",
            power: "98",
            speed: "63",
            strength: "100"
        }
    },
    {
        name: "Captain America",
        id: "149",
        image: {url: "https://www.superherodb.com/pictures2/portraits/10/100/274.jpg"},
        powerstats:{
            combat: "100",
            durability: "55",
            intelligence: "69",
            power: "60",
            speed: "38",
            strength: "19"
        }
    },
    {
        name: "Thor",
        id: "659",
        image: {url: "https://www.superherodb.com/pictures2/portraits/10/100/140.jpg"},
        powerstats:{
            combat: "100",
            durability: "100",
            intelligence: "69",
            power: "100",
            speed: "83",
            strength: "100"
        }
    }
]

export default () => {
    const user = useSelector(store => store.user.user)

    return (
      <div id="home" className="container">
        <h1>SuperHero App</h1>
        <h4>The best superheros app</h4>
        <h3 className="teamWeek"> Team of the week</h3>
        <div className="row">
            {seed.map(superhero=><Card superhero={superhero} key={superhero.id}/>)}
        </div>
      </div>
    );
  };