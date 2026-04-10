import React from "react";
import rooms from "../data/rooms";
import RoomCard from "../components/RoomCard";
import "./Rooms.css";

const Rooms = () => {
  return (
    <div className="rooms-page">
      <h1>Available Rooms</h1>
      <p>Choose from our luxury and budget-friendly rooms.</p>

      <div className="rooms-grid">
        {rooms.map((room) => (
          <RoomCard key={room.id} room={room} />
        ))}
      </div>
    </div>
  );
};

export default Rooms;