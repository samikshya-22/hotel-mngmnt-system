import React, { useState } from "react";
import API from "../services/api";

const Register = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: ""
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await API.post("/auth/register", form);
      alert(res.data);
    } catch (error) {
      alert("Registration failed");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input className="form-control mb-3" name="name" placeholder="Name" onChange={handleChange} />
        <input className="form-control mb-3" name="email" placeholder="Email" onChange={handleChange} />
        <input className="form-control mb-3" name="phone" placeholder="Phone" onChange={handleChange} />
        <input className="form-control mb-3" name="password" type="password" placeholder="Password" onChange={handleChange} />
        <button className="btn btn-success w-100">Register</button>
      </form>
    </div>
  );
};

export default Register;