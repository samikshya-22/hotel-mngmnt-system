package com.hotelmanagement.backend.repository;

import com.hotelmanagement.backend.entity.Booking;
import com.hotelmanagement.backend.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface BookingRepository extends JpaRepository<Booking, Long> {
    List<Booking> findByUser(User user);
}