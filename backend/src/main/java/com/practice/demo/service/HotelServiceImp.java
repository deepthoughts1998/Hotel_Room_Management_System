package com.practice.demo.service;

import com.practice.demo.entity.Hotel;
import com.practice.demo.exception.ResourceNotFoundException;
import com.practice.demo.repository.HotelRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class HotelServiceImp implements HotelService
{
    @Autowired
    private HotelRepository hotelRepository;

    @Override
    public Hotel addHotel( Hotel hotel )
    {
        return hotelRepository.save( hotel );
    }

    @Override
    public List<Hotel> gethotel()
    {
        return hotelRepository.findAll();
    }

    @Override
    public Hotel findHotelById( Long hotel_id )
    {
        hotelRepository.findById( hotel_id ).orElseThrow( () -> new ResourceNotFoundException( "Resource not found" ) );

        return hotelRepository.findById( hotel_id ).get();
    }

    @Override
    public void deleteHotel( Long hotel_id )
    {
        hotelRepository.deleteById( hotel_id );
    }

    @Override
    public Hotel updateHotel( Long hotel_id, Hotel hotel )
    {
        Hotel hotel1 = hotelRepository.findById( hotel_id ).get();




        return hotelRepository.save( hotel1 );

    }


}
