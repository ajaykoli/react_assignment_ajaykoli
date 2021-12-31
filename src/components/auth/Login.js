import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import { useSelector, useDispatch } from "react-redux";
import { loginRequest } from './auth.actions';
import FlashMessage from '../common/FlashMessage';

const Login = (props) => {

    const checkToken = localStorage.getItem('token');
    const token = checkToken !== '' && checkToken !== null;
    const initialFormState = {username: '',  password: ''};
    const [user, setUser] = useState(initialFormState);
    const [checkLogIn, setLogIn] = useState(token);
    const dispatch = useDispatch();
    const history = useHistory();
    const { isLoggedIn, loginFail } = useSelector(({ auth }) => auth);

    useEffect(() => {
        if(checkLogIn === true){
            history.push("/dashboard");
        }
    }, [checkLogIn])

    useEffect(() => {
        if(isLoggedIn === true){
            localStorage.setItem('token', JSON.stringify(true));
            setLogIn(isLoggedIn);
            history.push("/dashboard");
        }
    }, [isLoggedIn])

    useEffect(() => {
        if(loginFail === true){
            FlashMessage({ message: "Username or Password is incorrect, please try again.", type: 'error' });
        }
    }, [loginFail])

    //React controlled fields
    const handleInputChange = event => {
        const {name, value} = event.target;
        setUser({...user, [name]: value})
    };
    const handleRegister = () => {
        history.push("/register");
    };
    const handleForgotPassword = () => {
        history.push("/login");
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (!user.username || !user.password ) return;
        dispatch(loginRequest(user));
    };

    return (
        <div className="small-container">
            <form onSubmit={handleSubmit}>
                <center>
                    <h2>Login</h2>
                </center>
                <label>Username</label>
                <input type="text" name="username" placeholder="Enter username" value={user.username} onChange={handleInputChange} required/>
                <label>Password</label>
                <input type="password" name="password" placeholder="Enter password" value={user.password} onChange={handleInputChange} required/> 
                <button className="button">Login</button>
            </form>
            <div className='actions'>
                <span className='registration-link' onClick={handleRegister}>Register</span>
                <span className='forgot-link' onClick={handleForgotPassword}>forgot password</span>
            </div>
        </div>
    )
};  

Login.propTypes = {
    handleSubmit:PropTypes.func,
};

export default Login
