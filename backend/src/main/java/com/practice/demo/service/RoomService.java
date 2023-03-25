package com.practice.demo.service;

import com.practice.demo.entity.Room;

import java.util.List;

public interface RoomService
{
    public Room addRoom( Room room );


    List<Object[]> getRooms( Long hotel_id );

    Room getRoom(int roomId);

    Room updateRoom( int roomTypeId, Room room );


    void deleteRoom( int roomTypeId );


}
