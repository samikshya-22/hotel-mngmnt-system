package com.hotelmanagement.backend.controller;

import com.hotelmanagement.backend.dto.LoginRequest;
import com.hotelmanagement.backend.dto.RegisterRequest;
import com.hotelmanagement.backend.entity.User;
import com.hotelmanagement.backend.service.AuthService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
@CrossOrigin(origins = "http://localhost:5173")
public class AuthController {

    @Autowired
    private AuthService authService;

    @PostMapping("/register")
    public String register(@RequestBody RegisterRequest request) {
        return authService.register(request);
    }

    @PostMapping("/login")
    public Object login(@RequestBody LoginRequest request) {
        User user = authService.login(request);
        if (user != null) {
            return user;
        }
        return "Invalid email or password!";
    }
}