import React, { useState } from "react";
import API from "../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({
    email: "",
    password: ""
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/login", form);

      if (res.data.id) {
        localStorage.setItem("user", JSON.stringify(res.data));
        alert("Login successful!");
        navigate("/rooms");
      } else {
        alert(res.data);
      }
    } catch (error) {
      alert("Login failed");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2>User Login</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-3" name="email" placeholder="Email" onChange={handleChange} />
        <input className="form-control mb-3" name="password" type="password" placeholder="Password" onChange={handleChange} />
        <button className="btn btn-primary w-100">Login</button>
      </form>
    </div>
  );
};

export default Login;