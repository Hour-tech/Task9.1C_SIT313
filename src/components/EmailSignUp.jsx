import React from "react";
import './EmailSignUp.css';

function EmailSignUp() {
    return (
        <form className="container get-user-email" id="emailForm">
            <div className="row">
                <div className="col-lg-12 whole-form">
                    <label for="email">SIGN UP FOR OUR DAILY INSIDER: </label>
                    <input type="email" name="email" id="email" placeholder="Enter your email" required/>
                        <input type="submit" value="Subscribe"/>
                        </div>
                </div>
        </form>
    );
}

export default EmailSignUp;