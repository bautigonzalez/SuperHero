import React from "react";
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";
import {register} from "../../redux/action-creators/user"
import { useHistory } from 'react-router-dom'
import "./Register.scss"

export default () => {
    const dispatch = useDispatch();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [invalid, setInvalid] = React.useState(false);
    const history = useHistory();

    const handleSubmit = event =>{
        event.preventDefault()
        dispatch(register(username, password))
        .then(()=> history.push('/search'))
        .catch((e)=>{if(e)setInvalid(true)})
    }
    const handleUsername = e => setUsername(e.target.value)
    const handlePassword = e => setPassword(e.target.value)

    return (
      <div id="register" className="container">
            <div className="row">
              <div id="divRegister" className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <h2>Create your account!</h2>
                {invalid ? <p style={{color: "red"}}>This email has already exists</p> : null}
                <form autoComplete="off" onSubmit={handleSubmit}>
                <div class="form-group">
                        <input 
                        value={username}
                        type="email" 
                        class="form-control" 
                        id="email" 
                        placeholder="Email"
                        onChange={handleUsername}
                        required
                        /> 
                      </div>
                      <div class="form-group">
                        <input 
                        value={password}
                        type="password" 
                        class="form-control" 
                        id="password" 
                        placeholder="Password"
                        onChange={handlePassword}
                        required
                        /> 
                      </div>
                    <Button variant="contained" type="submit">Register</Button>
                </form>
              </div>
          </div>
      </div>
    );
  };