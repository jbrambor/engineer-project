import React from "react";

const LogOut = () => {
    if (localStorage.getItem('user')) {
        localStorage.removeItem('user');
        setTimeout(() => {
            window.location.reload();
        }, 2000);
    }
    return (
        <div className="container">
            <h1>
                You have been successfully logged out.
            </h1>
            <p>
                Thanks for using our app! 
            </p>
        </div>
    );
};

export default LogOut;
