import React from "react";
import Navbar from "../navbar/Navbar"
import { useDispatch, useSelector } from "react-redux";
import {searchSuperheros} from "../../redux/action-creators/superhero"

export default () => {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState("");
  const handleChange = e => setSearch(e.target.value)
  const handleSubmit = () => {
    if(search){ 
      dispatch(searchSuperheros(search))
      setSearch("")
    }
  }

  return (
      <>
        <Navbar handleChange={handleChange} handleSubmit={handleSubmit} searchValue={search}/>
      </>
    )
  };