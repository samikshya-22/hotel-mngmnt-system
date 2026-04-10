package com.hotelmanagement.backend.service;

import com.hotelmanagement.backend.dto.RoomRequest;
import com.hotelmanagement.backend.entity.Room;
import com.hotelmanagement.backend.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomService {

    @Autowired
    private RoomRepository roomRepository;

    public Room addRoom(RoomRequest request) {
        Room room = new Room();
        room.setRoomNumber(request.getRoomNumber());
        room.setRoomType(request.getRoomType());
        room.setPricePerNight(request.getPricePerNight());
        room.setCapacity(request.getCapacity());
        room.setDescription(request.getDescription());
        room.setImageUrl(request.getImageUrl());
        room.setStatus(request.getStatus());

        return roomRepository.save(room);
    }

    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    public List<Room> getAvailableRooms() {
        return roomRepository.findByStatus("AVAILABLE");
    }

    public Room getRoomById(Long id) {
        Optional<Room> room = roomRepository.findById(id);
        return room.orElse(null);
    }

    public void deleteRoom(Long id) {
        roomRepository.deleteById(id);
    }
}