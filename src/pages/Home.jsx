import React from "react";
import { Link } from "react-router-dom";
import rooms from "../data/rooms";
import RoomCard from "../components/RoomCard";
import "./Home.css";

const Home = () => {
  const featuredRooms = rooms.slice(0, 3);

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-overlay">
          <h1>Welcome to HotelEase</h1>
          <p>Book luxury rooms at affordable prices with a seamless experience.</p>
          <Link to="/rooms" className="hero-btn">Explore Rooms</Link>
        </div>
      </section>

      <section className="features">
        <div className="feature-card">🛏️ Premium Rooms</div>
        <div className="feature-card">📶 Free WiFi</div>
        <div className="feature-card">🍽️ Complimentary Breakfast</div>
        <div className="feature-card">🚗 Free Parking</div>
      </section>

      <section className="featured-section">
        <h2>Featured Rooms</h2>
        <div className="rooms-grid">
          {featuredRooms.map((room) => (
            <RoomCard key={room.id} room={room} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;