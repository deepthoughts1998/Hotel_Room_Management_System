package com.practice.demo.service;

import com.practice.demo.entity.Hotel;

import java.util.List;

public interface HotelService
{

    public Hotel addHotel( Hotel hotel );


    public List<Hotel> gethotel();

    public Hotel findHotelById( Long hotel_id );

    public void deleteHotel( Long hotel_id );

    public Hotel updateHotel( Long hotel_id, Hotel hotel );
}
