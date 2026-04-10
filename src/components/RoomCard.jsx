import React from "react";
import { Link } from "react-router-dom";
import "./RoomCard.css";

const RoomCard = ({ room }) => {
  return (
    <div className="room-card">
      <img src={room.image_url} alt={room.room_type} className="room-image" />
      <div className="room-content">
        <h3>{room.room_type}</h3>
        <p><strong>Room No:</strong> {room.room_number}</p>
        <p><strong>Capacity:</strong> {room.capacity} Guests</p>
        <p className="room-desc">{room.description}</p>
        <div className="room-footer">
          <span>₹{room.price_per_night}/night</span>
          <Link to={`/rooms/${room.id}`} className="view-btn">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default RoomCard;