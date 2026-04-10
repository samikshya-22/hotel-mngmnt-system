import React, { useEffect, useState } from "react";
import API from "../services/api";

const ManageBookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    fetchBookings();
  }, []);

  const fetchBookings = async () => {
    const res = await API.get("/bookings");
    setBookings(res.data);
  };

  return (
    <div className="container mt-5">
      <h2>Manage Bookings</h2>

      <div className="row mt-4">
        {bookings.map((booking) => (
          <div className="col-md-6 mb-4" key={booking.id}>
            <div className="card shadow p-3">
              <h5>{booking.room.roomType}</h5>
              <p>User: {booking.user.name}</p>
              <p>Check-in: {booking.checkInDate}</p>
              <p>Check-out: {booking.checkOutDate}</p>
              <p>Total: ₹{booking.totalAmount}</p>
              <p>Status: {booking.bookingStatus}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageBookings;