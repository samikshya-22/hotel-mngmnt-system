import React, { useState } from "react";
import API from "../services/api";
import { useParams, useNavigate } from "react-router-dom";

const Booking = () => {
  const { roomId } = useParams();
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  const [form, setForm] = useState({
    checkInDate: "",
    checkOutDate: ""
  });

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!user) {
      alert("Please login first!");
      navigate("/login");
      return;
    }

    const bookingData = {
      userId: user.id,
      roomId: parseInt(roomId),
      checkInDate: form.checkInDate,
      checkOutDate: form.checkOutDate
    };

    try {
      const res = await API.post("/bookings", bookingData);

      if (res.data.id) {
        alert("Booking successful!");
        navigate("/my-bookings");
      } else {
        alert(res.data);
      }
    } catch (error) {
      alert("Booking failed!");
    }
  };

  return (
    <div className="container mt-5" style={{ maxWidth: "500px" }}>
      <h2>Book Room</h2>
      <form onSubmit={handleSubmit}>
        <label>Check-in Date</label>
        <input type="date" name="checkInDate" className="form-control mb-3" onChange={handleChange} />
        
        <label>Check-out Date</label>
        <input type="date" name="checkOutDate" className="form-control mb-3" onChange={handleChange} />

        <button className="btn btn-success w-100">Confirm Booking</button>
      </form>
    </div>
  );
};

export default Booking;