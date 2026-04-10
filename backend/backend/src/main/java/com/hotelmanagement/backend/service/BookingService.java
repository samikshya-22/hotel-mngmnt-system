package com.hotelmanagement.backend.service;

import com.hotelmanagement.backend.dto.BookingRequest;
import com.hotelmanagement.backend.entity.Booking;
import com.hotelmanagement.backend.entity.Room;
import com.hotelmanagement.backend.entity.User;
import com.hotelmanagement.backend.repository.BookingRepository;
import com.hotelmanagement.backend.repository.RoomRepository;
import com.hotelmanagement.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.temporal.ChronoUnit;
import java.util.List;
import java.util.Optional;

@Service
public class BookingService {

    @Autowired
    private BookingRepository bookingRepository;

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoomRepository roomRepository;

    public Booking createBooking(BookingRequest request) {
        Optional<User> userOptional = userRepository.findById(request.getUserId());
        Optional<Room> roomOptional = roomRepository.findById(request.getRoomId());

        if (userOptional.isEmpty() || roomOptional.isEmpty()) {
            return null;
        }

        Room room = roomOptional.get();

        if (!"AVAILABLE".equalsIgnoreCase(room.getStatus())) {
            return null;
        }

        long days = ChronoUnit.DAYS.between(request.getCheckInDate(), request.getCheckOutDate());
        if (days <= 0) {
            return null;
        }

        double totalAmount = days * room.getPricePerNight();

        Booking booking = new Booking();
        booking.setUser(userOptional.get());
        booking.setRoom(room);
        booking.setCheckInDate(request.getCheckInDate());
        booking.setCheckOutDate(request.getCheckOutDate());
        booking.setTotalAmount(totalAmount);
        booking.setBookingStatus("CONFIRMED");

        room.setStatus("BOOKED");
        roomRepository.save(room);

        return bookingRepository.save(booking);
    }

    public List<Booking> getBookingsByUser(Long userId) {
        Optional<User> userOptional = userRepository.findById(userId);
        return userOptional.map(bookingRepository::findByUser).orElse(null);
    }

    public List<Booking> getAllBookings() {
        return bookingRepository.findAll();
    }

    public String cancelBooking(Long bookingId) {
        Optional<Booking> bookingOptional = bookingRepository.findById(bookingId);

        if (bookingOptional.isEmpty()) {
            return "Booking not found!";
        }

        Booking booking = bookingOptional.get();
        booking.setBookingStatus("CANCELLED");

        Room room = booking.getRoom();
        room.setStatus("AVAILABLE");
        roomRepository.save(room);

        bookingRepository.save(booking);

        return "Booking cancelled successfully!";
    }
}