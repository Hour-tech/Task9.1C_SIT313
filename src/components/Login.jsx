import React, { useEffect, useState } from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";
import { db } from "../firebase";
import { Link } from "react-router-dom";
import { collection, query, where, getDocs } from "firebase/firestore";


function Login() {
    const navigation = useNavigate();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errorMsg, setErrorMsg] = useState("");
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
      const userEmail = localStorage.getItem("userEmail");
      if (userEmail) {
        setIsLoggedIn(true);
        setEmail(userEmail);
      }
    }, []);

    const handleSignOut = () => { 
      localStorage.removeItem("userEmail"); 
      setIsLoggedIn(false); 
      setEmail(""); 
      setPassword(""); 
      alert("You have successfully signed out"); 
    };
  
    const handleLogin = async () => {
      setErrorMsg(""); 
      try {
        const q = query(
          collection(db, "signups"),
          where("email", "==", email),
          where("password", "==", password)
        );
  
        const snapshot = await getDocs(q);
  
        if (!snapshot.empty) {
          localStorage.setItem("userEmail", email); 
          setIsLoggedIn(true);
          navigation("/");
        } else {
          alert("Invalid email or password");
        }
      } catch (err) {
        console.error("Login error:", err);
        setErrorMsg("Something went wrong. Please try again.");
      }
    };

    return (
        <div className="login-form">
            <div className="login-row">
                <Link to="/signUpBottom">
                <button>Sign Up</button>
                </Link>
            </div>
            <div className="login-row">
                Your Email
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)}/>
            </div>
            <div className="login-row">
                Your Password
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
            </div>
            <div className="login-row">
              {!isLoggedIn && <button onClick={handleLogin}>Login</button>} 
              {isLoggedIn && <button onClick={handleSignOut}>Sign Out</button>}
            </div>
        </div>
    );
}
export default Login;