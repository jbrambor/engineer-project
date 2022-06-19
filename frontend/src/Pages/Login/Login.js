import React from "react";
import { Link } from "react-router-dom";

import LoginImage from "./LoginImage";

import LoginImgSrc from "../../images/login-background.jpg";

const LoginPage = () => {
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
                        <input placeholder="E-mail" type="text" id="userEmail">

                        </input>
                    </div>
                    <div className="col">
                        <input placeholder="Password" type="text" id="userPassword">
                            
                        </input>
                    </div>
                    <div className="col">
                        <input value="Sign In" type="submit" id="loginToPage">

                        </input>
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
