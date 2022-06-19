import React from "react";
import { Link } from "react-router-dom";

import RegisterImage from "./RegisterImage";

import RegisterImgSrc from "../../images/register-background.jpg";

const RegisterPage = () => {
    return (
        <div className="container register">
            <div className="register__data">
                <div className="register__data--title">
                    <h1>
                        Register
                    </h1>
                </div>
                <div className="register__data--form">
                    <div className="col">
                        <input placeholder="E-mail" type="text" id="userEmail">

                        </input>
                    </div>
                    <div className="col">
                        <input placeholder="Password" type="text" id="userPassword">
                            
                        </input>
                    </div>
                    <div className="col">
                        <input placeholder="Confirm Password" type="text" id="userPasswordConfirm">
                            
                        </input>
                    </div>
                    <div className="col">
                        <input value="Sign Up" type="submit" id="registerToPage">

                        </input>
                    </div>
                    <div className="col already-user">
                        <Link to="/login">
                            Already Have An Account?
                        </Link>
                    </div>
                </div>
            </div>
            <div className="register__image">
                <RegisterImage alt={"register"} src={RegisterImgSrc} />
            </div>
        </div>
    )
}

export default RegisterPage;
