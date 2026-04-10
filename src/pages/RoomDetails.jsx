import React, { useEffect, useState } from "react";
import API from "../services/api";
import { useParams, useNavigate } from "react-router-dom";

const RoomDetails = () => {
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRoom();
  }, []);

  const fetchRoom = async () => {
    try {
      const res = await API.get(`/rooms/${id}`);
      setRoom(res.data);
    } catch (error) {
      console.error(error);
    }
  };

  const handleBook = () => {
    navigate(`/booking/${id}`);
  };

  if (!room) return <p className="text-center mt-5">Loading...</p>;

  return (
    <div className="container mt-5">
      <div className="card shadow">
        <img src={room.imageUrl} alt={room.roomType} className="card-img-top" style={{ height: "400px", objectFit: "cover" }} />
        <div className="card-body">
          <h2>{room.roomType}</h2>
          <p>Room Number: {room.roomNumber}</p>
          <p>Price: ₹{room.pricePerNight} / night</p>
          <p>Capacity: {room.capacity}</p>
          <p>{room.description}</p>
          <button className="btn btn-success" onClick={handleBook}>Book Now</button>
        </div>
      </div>
    </div>
  );
};

export default RoomDetails;