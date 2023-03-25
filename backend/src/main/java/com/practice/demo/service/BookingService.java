package com.practice.demo.service;

import com.practice.demo.entity.Room;

import java.time.LocalDate;
import java.util.List;

public interface BookingService
{

    List<List<Object[]>> getHotel( LocalDate checkInDate, int noOfNights, String adultCount );
}
