package com.hotelmanagement.backend.controller;

import com.hotelmanagement.backend.dto.BookingRequest;
import com.hotelmanagement.backend.entity.Booking;
import com.hotelmanagement.backend.service.BookingService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/bookings")
public class BookingController {

    @Autowired
    private BookingService bookingService;

    @PostMapping
    public Object createBooking(@RequestBody BookingRequest request) {
        Booking booking = bookingService.createBooking(request);
        if (booking != null) {
            return booking;
        }
        return "Booking failed! Room unavailable or invalid dates.";
    }

    @GetMapping("/user/{userId}")
    public List<Booking> getBookingsByUser(@PathVariable Long userId) {
        return bookingService.getBookingsByUser(userId);
    }

    @GetMapping
    public List<Booking> getAllBookings() {
        return bookingService.getAllBookings();
    }

    @PutMapping("/cancel/{bookingId}")
    public String cancelBooking(@PathVariable Long bookingId) {
        return bookingService.cancelBooking(bookingId);
    }
}