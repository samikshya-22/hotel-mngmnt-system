package com.hotelmanagement.backend.controller;

import com.hotelmanagement.backend.entity.Booking;
import com.hotelmanagement.backend.entity.Room;
import com.hotelmanagement.backend.service.AdminService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/admin")
public class AdminController {

    @Autowired
    private AdminService adminService;

    @GetMapping("/rooms")
    public List<Room> getAllRooms() {
        return adminService.getAllRooms();
    }

    @GetMapping("/bookings")
    public List<Booking> getAllBookings() {
        return adminService.getAllBookings();
    }
}