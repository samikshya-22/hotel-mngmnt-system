import React, { useEffect, useState } from "react";
import API from "../services/api";

const MyBookings = () => {
  const user = JSON.parse(localStorage.getItem("user"));
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    if (user) {
      fetchBookings();
    }
  }, []);

  const fetchBookings = async () => {
    try {
      const res = await API.get(`/bookings/user/${user.id}`);
      setBookings(res.data || []);
    } catch (error) {
      console.error(error);
    }
  };

  const cancelBooking = async (id) => {
    try {
      const res = await API.put(`/bookings/cancel/${id}`);
      alert(res.data);
      fetchBookings();
    } catch (error) {
      alert("Cancel failed");
    }
  };

  return (
    <div className="container mt-5">
      <h2>My Bookings</h2>
      <div className="row mt-4">
        {bookings.map((booking) => (
          <div className="col-md-6 mb-4" key={booking.id}>
            <div className="card shadow p-3">
              <h5>{booking.room.roomType}</h5>
              <p>Room No: {booking.room.roomNumber}</p>
              <p>Check-in: {booking.checkInDate}</p>
              <p>Check-out: {booking.checkOutDate}</p>
              <p>Total: ₹{booking.totalAmount}</p>
              <p>Status: {booking.bookingStatus}</p>

              {booking.bookingStatus === "CONFIRMED" && (
                <button
                  className="btn btn-danger"
                  onClick={() => cancelBooking(booking.id)}
                >
                  Cancel Booking
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MyBookings;