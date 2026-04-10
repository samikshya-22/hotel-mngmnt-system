import React, { useEffect, useState } from "react";
import API from "../services/api";

const ManageRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [form, setForm] = useState({
    roomNumber: "",
    roomType: "",
    pricePerNight: "",
    capacity: "",
    description: "",
    imageUrl: "",
    status: "AVAILABLE"
  });

  useEffect(() => {
    fetchRooms();
  }, []);

  const fetchRooms = async () => {
    const res = await API.get("/rooms");
    setRooms(res.data);
  };

  const handleChange = (e) => {
    setForm({...form, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await API.post("/rooms", form);
    alert("Room added successfully!");
    setForm({
      roomNumber: "",
      roomType: "",
      pricePerNight: "",
      capacity: "",
      description: "",
      imageUrl: "",
      status: "AVAILABLE"
    });
    fetchRooms();
  };

  const deleteRoom = async (id) => {
    await API.delete(`/rooms/${id}`);
    alert("Room deleted!");
    fetchRooms();
  };

  return (
    <div className="container mt-5">
      <h2>Manage Rooms</h2>

      <form onSubmit={handleSubmit} className="card p-4 shadow mt-4">
        <input className="form-control mb-3" name="roomNumber" placeholder="Room Number" value={form.roomNumber} onChange={handleChange} />
        <input className="form-control mb-3" name="roomType" placeholder="Room Type" value={form.roomType} onChange={handleChange} />
        <input className="form-control mb-3" name="pricePerNight" placeholder="Price Per Night" value={form.pricePerNight} onChange={handleChange} />
        <input className="form-control mb-3" name="capacity" placeholder="Capacity" value={form.capacity} onChange={handleChange} />
        <textarea className="form-control mb-3" name="description" placeholder="Description" value={form.description} onChange={handleChange}></textarea>
        <input className="form-control mb-3" name="imageUrl" placeholder="Image URL" value={form.imageUrl} onChange={handleChange} />
        <button className="btn btn-primary">Add Room</button>
      </form>

      <div className="row mt-4">
        {rooms.map((room) => (
          <div className="col-md-4 mb-4" key={room.id}>
            <div className="card shadow p-3">
              <h5>{room.roomType}</h5>
              <p>Room No: {room.roomNumber}</p>
              <p>Status: {room.status}</p>
              <button className="btn btn-danger" onClick={() => deleteRoom(room.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ManageRooms;