package com.practice.demo.service;

import com.practice.demo.entity.Room;
import com.practice.demo.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RoomServiceImpl implements RoomService
{
    @Autowired
    private RoomRepository roomRepository;

    @Override
    public Room addRoom( Room room )
    {
//        List<Object> x=roomRepository.findByHotelId(room.getHotel().getHotel_id());
//        List<Object[]> list=roomRepository.findByHotelId(room.getHotel().getHotel_id());
//        for (Object[] obj : list){
//            System.out.println(obj[0]);
//
//        }


        return roomRepository.save( room );
    }

    @Override
    public List<Object[]> getRooms( Long hotel_id )
    {
        return roomRepository.findByHotelId( hotel_id );
    }

    @Override
    public Room getRoom( int roomId )
    {
        return roomRepository.findById( roomId ).get();
    }

    @Override
    public Room updateRoom( int roomTypeId, Room room )
    {
        Room room1 = roomRepository.findById( roomTypeId ).get();
        if( room.getTypeName() != null && room.getTypeName().trim().length() != 0 )
        {
            room1.setTypeName( room.getTypeName() );
        }
        room1.setMaxNoOfAdult( room.getMaxNoOfAdult() );
        room1.setRoomCount( room.getRoomCount() );
        room1.setPrice( room.getPrice() );

        return roomRepository.save( room1 );
    }

    @Override
    public void deleteRoom( int roomTypeId )
    {
        roomRepository.deleteById( roomTypeId );
    }


}
