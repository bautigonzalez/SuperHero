import React from "react";
import Button from '@material-ui/core/Button';
import { useDispatch, useSelector } from "react-redux";
import {login} from "../../redux/action-creators/user"
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router-dom';
import "./Login.scss"

export default () => {
    const dispatch = useDispatch();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [invalid, setInvalid] = React.useState(false);
    const history = useHistory();

    const handleSubmit = event =>{
        event.preventDefault()
        dispatch(login(username, password))
        .then(()=> history.push('/home'))
        .catch((e)=>{if(e)setInvalid(true)})
    }
    const handleUsername = e => setUsername(e.target.value)
    const handlePassword = e => setPassword(e.target.value)

    return (
      <div id="login" className="container">
          <div className="row">
              <div id="divLogin" className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <h2>Sign in</h2>
                {invalid ? <p style={{color:"red"}}>Invalid email or password</p>:null}
                <form autoComplete="off" onSubmit={handleSubmit}>
                      <div className="form-group">
                        <input 
                        value={username}
                        type="email" 
                        className="form-control" 
                        id="email" 
                        placeholder="Email"
                        onChange={handleUsername}
                        required
                        /> 
                      </div>
                      <div className="form-group">
                        <input 
                        value={password}
                        type="password" 
                        className="form-control" 
                        id="password" 
                        placeholder="Password"
                        onChange={handlePassword}
                        required
                        /> 
                      </div>
                    <Button variant="contained" type="submit">Login</Button>
                </form>
                <p>You don't have an account? <Link to="/register">Register</Link></p>
              </div>
          </div>
      </div>
    );
  };