import React from "react";
import Navbar from "../navbar/Navbar"
import { useDispatch, useSelector } from "react-redux";
import {searchSuperheros} from "../../redux/action-creators/superhero"
import { useHistory } from 'react-router-dom';

export default () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [search, setSearch] = React.useState("");
  const handleChange = e => setSearch(e.target.value)
  const handleSubmit = () => {
    if(search){ 
      dispatch(searchSuperheros(search))
      history.push('/home')
      setSearch("")
    }
  }

  return (
      <>
        <Navbar handleChange={handleChange} handleSubmit={handleSubmit} searchValue={search}/>
      </>
    )
  };