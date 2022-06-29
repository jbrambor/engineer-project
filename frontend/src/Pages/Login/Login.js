import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import LoginImage from "./LoginImage";

import LoginImgSrc from "../../images/login-background.jpg";

const LoginPage = () => {
    const [loginError, setLoginError] = useState(false);
    const [isLoading, setLoading] = useState(false);
    const [isLogged, setLoginInfo] = useState(false);
    const [userEmail, setUserEmail] = useState(null);
    const [userPassword, setUserPassword] = useState(null);
    useEffect(() => {
        const getUser = localStorage.getItem('user');
        if (getUser) {
            setLoginInfo(true);
        }

    }, []);
    function LoginToPage(email, password) {
        setLoginError(false);
        setLoading(true);
        setTimeout(() => {
            axios.post(`http://localhost:8000/auth/login`, {
                email: email,
                password: password
            })
                .then((response) => {
                    setLoading(false);
                    localStorage.setItem('user', response.data._id);
                    setLoginInfo(true);
                    setTimeout(() => {
                        window.location.reload();
                    }, 2000);
                    
                })
                .catch( (error) => {
                    console.log(error);
                    setLoginError(true);
                    setLoading(false);
                });
        }, 1000);
    }
    
    return (
        <div className="container login">
            <div className="login__data">
                <div className="login__data--title">
                    <h1>
                        Login
                    </h1>
                </div>
                <div className="login__data--form">
                    <div className="col">
                        <input placeholder="E-mail" type="text" id="userEmail"
                            onChange={(userEmail) => {
                                setUserEmail(userEmail.target.value);
                            }}
                        >

                        </input>
                    </div>
                    <div className="col">
                        <input placeholder="Password" type="password" id="userPassword"
                            onChange={(userPass) => {
                                setUserPassword(userPass.target.value);
                            }}
                        >
                            
                        </input>
                    </div>
                    <div className="col">
                        { !isLogged ?
                            <input value="Sign In" type="submit" id="loginToPage" onClick={() => {
                                LoginToPage(userEmail, userPassword);
                            }}>

                            </input>
                            : '' }
                    </div>
                    <div className="col">
                        { loginError ? 
                            <p className="error">
                                Incorrect data!
                            </p>
                            : '' }
                        { isLoading ? 
                            <p className="info">
                                Loading...
                            </p>
                            : '' }
                        { isLogged ? 
                            <p className="success">
                                Logged successfully. 
                            </p>
                            : '' }
                    </div>
                        
                    <div className="col forgot-password">
                        <Link to="/register">
                            Dont Have Any Account?
                        </Link>
                    </div>
                </div>
            </div>
            <div className="login__image">
                <LoginImage alt={"login"} src={LoginImgSrc} />
            </div>
        </div>
    )
}

export default LoginPage;
