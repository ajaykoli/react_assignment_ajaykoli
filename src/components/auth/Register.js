import React, {useEffect, useState} from 'react';
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { registerRequest } from './auth.actions';
import FlashMessage from '../common/FlashMessage';

const Register = (props) => {

    const checkToken = localStorage.getItem('token');
    const token = checkToken !== '' && checkToken !== null;
    const initialFormState = {username: '',  password: ''};
    const [user, setUser] = useState(initialFormState);
    const [checkLogIn, setLogIn] = useState(token);
    const dispatch = useDispatch();
    const history = useHistory();
    const { isRegistered, registerFail } = useSelector(({ auth }) => auth);

    useEffect(() => {
        if(checkLogIn === true){
            history.push("/dashboard");
        }
    }, [checkLogIn])

    useEffect(() => {
        if(isRegistered === true){
            FlashMessage({ message: "User has been created successfully." });
            history.push("/login");
        }
    }, [isRegistered])

    useEffect(() => {
        if(registerFail === true){
            FlashMessage({ message: "Something went wrong, please try again.", type: 'error' });
        }
    }, [registerFail])

    const handleLogin = () => {
        history.push("/login");
    };
    const handleForgotPassword = () => {
        history.push("/login");
    };

    //React controlled fields
    const handleInputChange = event => {
        const {name, value} = event.target;
        setUser({...user, [name]: value})
    };

    const handleSubmit = event => {
        event.preventDefault();
        if (!user.username || !user.phone_number || !user.password ) return;
        if(user.password !== user.confirm_password) return FlashMessage({ message: "Password and confirm password must be same, please try again.", type: 'error' });
        dispatch(registerRequest(user));
    };

    return (
        <div className="small-container">
            <form onSubmit={handleSubmit}>
                <center>
                    <h2>Register</h2>
                </center>
                <label>Email</label>
                <input type="text" name="username" placeholder="Enter email" value={user.username} onChange={handleInputChange} required/>
                <label>Password</label>
                <input type="password" name="password" placeholder="Enter password" value={user.password} onChange={handleInputChange} required/> 
                <label>Confirm Password</label>
                <input type="password" name="confirm_password" placeholder="Enter password" value={user.confirm_password} onChange={handleInputChange} required/> 
                <label>Phone Number</label>
                <input type="number" min={10} name="phone_number" placeholder="Enter password" value={user.phone_number} onChange={handleInputChange} required/> 
                <button className="button">Submit</button>
            </form>
            <div className='actions'>
                <span className='registration-link' onClick={handleLogin}>Login</span>
                <span className='forgot-link' onClick={handleForgotPassword}>forgot password</span>
            </div>
        </div>
    )
};  

export default Register
