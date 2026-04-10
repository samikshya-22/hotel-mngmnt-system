import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="container mt-5">
      <h2>Admin Dashboard</h2>
      <div className="mt-4 d-flex gap-3">
        <Link to="/manage-rooms" className="btn btn-primary">Manage Rooms</Link>
        <Link to="/manage-bookings" className="btn btn-success">Manage Bookings</Link>
      </div>
    </div>
  );
};

export default AdminDashboard;