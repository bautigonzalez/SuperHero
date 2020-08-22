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
    const [password2, setPassword2] = React.useState("");
    const [invalid, setInvalid] = React.useState(false);
    const [invalidPass, setInvalidPass] = React.useState(false);
    const history = useHistory();

    const handleSubmit = event =>{
        event.preventDefault()
        if(password == password2) dispatch(register(username, password))
        .then(()=> history.push('/search'))
        .catch((e)=>{if(e)setInvalid(true)})
        else setInvalidPass(true)
    }
    const handleUsername = e => setUsername(e.target.value)
    const handlePassword = e => setPassword(e.target.value)
    const handlePassword2 = e => setPassword2(e.target.value)

    return (
      <div id="register" className="container">
            <div className="row">
              <div id="divRegister" className="col-12 col-sm-12 col-md-6 col-lg-6 col-xl-6">
                <h2>Create your account!</h2>
                {invalid ? <p style={{color: "red"}}>This email has already exists</p> : null}
                {invalidPass ? <p style={{color: "red"}}>Invalid Password</p> : null}
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
                      <div className="form-group">
                        <input 
                        value={password2}
                        type="password" 
                        className="form-control" 
                        id="password2" 
                        placeholder="Repeat password"
                        onChange={handlePassword2}
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