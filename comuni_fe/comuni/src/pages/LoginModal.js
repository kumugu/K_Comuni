import { useState } from "react";
import axios from 'axios';
import "../styles/LoginModal.css";

export default function LoginModal({ onClose, onLogin }) {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setMessage("");

    if (!isLogin && !validateEmail(email)) {
      setError("Invalid email format");
      return;
    }

    try {
      if (isLogin) {
        // 로그인 로직
        const response = await axios.post('http://localhost:8080/api/users/login', {
          username,
          password
        });
        setMessage("Logged in successfully");
        onLogin(username, password);
      } else {
        // 회원가입 로직
        const response = await axios.post('http://localhost:8080/api/users/register', {
          username,
          password,
          email
        });
        setMessage("Registered successfully. Please log in.");
        setIsLogin(true);
      }
    } catch (error) {
      setError(error.response?.data?.message || "An error occurred");
    }
  };

  const validateEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
  };

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-btn" onClick={onClose}>
          &times;
        </button>
        <h2>{isLogin ? "Login" : "Register"}</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {!isLogin && (
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          )}
          <button type="submit">{isLogin ? "Login" : "Register"}</button>
        </form>
        {error && <p className="error">{error}</p>}
        {message && <p className="message">{message}</p>}
        <p>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <button onClick={() => setIsLogin(!isLogin)}>{isLogin ? "Register" : "Login"}</button>
        </p>
      </div>
    </div>
  );
}