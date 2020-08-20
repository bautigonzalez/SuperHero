import React from "react";
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";
import {register} from "../../redux/action-creators/user"
import "./Register.scss"

export default () => {
    const dispatch = useDispatch();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleSubmit = event =>{
        event.preventDefault()
        dispatch(register(username, password))
        setUsername("")
        setPassword("")
    }
    const handleUsername = e => setUsername(e.target.value)
    const handlePassword = e => setPassword(e.target.value)

    return (
      <div id="register" className="container">
            <div className="row">
              <div id="divRegister" className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <h2>Create your account!</h2>
                <form autoComplete="off" onSubmit={handleSubmit}>
                    <TextField 
                    value={username} 
                    type="email" 
                    id="email" 
                    label="Email" 
                    variant="filled"
                    onChange={handleUsername}
                    required
                    />
                    <TextField 
                    value={password} 
                    type="password" 
                    id="password" 
                    label="Password" 
                    variant="filled" 
                    onChange={handlePassword}
                    required
                    />
                    <Button variant="contained" type="submit">Register</Button>
                </form>
              </div>
          </div>
      </div>
    );
  };