import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import {findUsers} from "../../redux/action-creators/user"
import { Link } from 'react-router-dom';
import "./Users.scss"

export default () => {
    const dispatch = useDispatch();
    const users = useSelector(store => store.user.users)

    useEffect(() => {
        dispatch(findUsers())
      }, []);

    return (
        <div id="users" className="container">
            <h2>Users</h2>
            {users.map(user=>
            <div key={user._id}>
                <Link to={`/users/${user._id}`}>
                    <span>{user.username}</span>
                </Link>
            </div>)}
        </div>
    );
  };