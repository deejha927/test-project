import React, { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";

function Login() {
  const navigate = useNavigate();
  const location = useLocation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    const test = { name: "deepak", last_name: "jha" };
    // Perform login logic here
    if (email === "example@example.com" && password === "password") {
      // Redirect to Home component after successful login
      navigate("/");
    } else {
      setError("Invalid email or password");
    }
  };

  if (!location.pathname) {
    location.pathname = "/";
  }

  return (
    <div className="form-div">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <div className="content">
          <label>Email:</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="content">
          <label>Password:</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
        {error && <p>{error}</p>}
      </form>
    </div>
  );
}

export default Login;
