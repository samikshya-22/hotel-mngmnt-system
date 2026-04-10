package com.hotelmanagement.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

@Entity
@Table(name = "rooms")
@Data
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(name = "room_number", unique = true)
    private String roomNumber;

    @Column(name = "room_type")
    private String roomType;

    @Column(name = "price_per_night")
    private Double pricePerNight;

    private Integer capacity;

    private String description;

    @Column(name = "image_url")
    private String imageUrl;

    private String status; // AVAILABLE or BOOKED
}