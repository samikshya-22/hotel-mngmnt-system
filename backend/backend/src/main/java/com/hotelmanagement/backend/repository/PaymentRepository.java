package com.hotelmanagement.backend.repository;

import com.hotelmanagement.backend.entity.Payment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface PaymentRepository extends JpaRepository<Payment, Long> {
}