import React, { useState } from "react";
import "./LoginStatus.css";

function LoginStatus() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
  };

  return (
    <div className="login-page">
      <div className="login-card">

        {isLoggedIn ? (
          <>
            <div className="status-icon success">
              <span>✓</span>
            </div>

            <h1>Welcome Back!</h1>

            <p>
              You are successfully logged in.
            </p>

            <button
              onClick={handleLogout}
              className="logout-btn"
            >
              Logout
            </button>
          </>
        ) : (
          <>
            <div className="status-icon login">
              <span>🔐</span>
            </div>

            <h1>Welcome!</h1>

            <p>
              Please log in to continue.
            </p>

            <button
              onClick={handleLogin}
              className="login-btn"
            >
              Login
            </button>
          </>
        )}

      </div>
    </div>
  );
}

export default LoginStatus;