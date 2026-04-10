package com.hotelmanagement.backend.entity;

import jakarta.persistence.*;
import lombok.Data;

import java.time.LocalDate;

@Entity
@Table(name = "payments")
@Data
public class Payment {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @OneToOne
    @JoinColumn(name = "booking_id")
    private Booking booking;

    @Column(name = "payment_method")
    private String paymentMethod;

    private Double amount;

    @Column(name = "payment_status")
    private String paymentStatus; // PAID or PENDING

    @Column(name = "payment_date")
    private LocalDate paymentDate;
}