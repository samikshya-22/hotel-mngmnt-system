package com.hotelmanagement.backend.service;

import com.hotelmanagement.backend.dto.LoginRequest;
import com.hotelmanagement.backend.dto.RegisterRequest;
import com.hotelmanagement.backend.entity.User;
import com.hotelmanagement.backend.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class AuthService {

    @Autowired
    private UserRepository userRepository;

    public String register(RegisterRequest request) {
        Optional<User> existingUser = userRepository.findByEmail(request.getEmail());
        if (existingUser.isPresent()) {
            return "Email already registered!";
        }

        User user = new User();
        user.setName(request.getName());
        user.setEmail(request.getEmail());
        user.setPhone(request.getPhone());
        user.setPassword(request.getPassword());
        user.setRole("USER");

        userRepository.save(user);
        return "User registered successfully!";
    }

    public User login(LoginRequest request) {
        Optional<User> userOptional = userRepository.findByEmail(request.getEmail());

        if (userOptional.isPresent()) {
            User user = userOptional.get();
            if (user.getPassword().equals(request.getPassword())) {
                return user;
            }
        }
        return null;
    }
}