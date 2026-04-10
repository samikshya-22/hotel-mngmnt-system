package com.hotelmanagement.backend.service;

import com.hotelmanagement.backend.entity.Booking;
import com.hotelmanagement.backend.entity.Room;
import com.hotelmanagement.backend.repository.BookingRepository;
import com.hotelmanagement.backend.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AdminService {

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private BookingRepository bookingRepository;

    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }
}