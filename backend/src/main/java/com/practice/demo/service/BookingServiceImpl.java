package com.practice.demo.service;


import com.practice.demo.entity.Hotel;
import com.practice.demo.entity.Room;
import com.practice.demo.repository.HotelRepository;
import com.practice.demo.repository.RoomRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.Collections;
import java.util.List;

import static java.util.Comparator.comparing;

@Service
public class BookingServiceImpl implements BookingService
{

    @Autowired
    private RoomRepository roomRepository;

    @Autowired
    private HotelRepository hotelRepository;

    @Override
    public List<List<Object[]>> getHotel( LocalDate checkInDate, int noOfNights, String adultCount )
    {

//        //converting string into an array which then will be converted to an integer array
//        String[] adultCountAsArray = adultCount.split( "," );
//        LocalDate checkOutDate = checkInDate.plusDays(noOfNights);
//
//        //Initializing integer array to hold the count of adults in every room
//        int[] adultCountInInteger = new int[adultCountAsArray.length];
//
//        //Converting the string array to an int array
//        for( int x = 0; x < adultCountAsArray.length; x++ )
//        {
//            adultCountInInteger[x] = Integer.parseInt( adultCountAsArray[x] );
//        }
//
//        //Sorting the int array
//        Arrays.sort( adultCountInInteger );
//
//        int numberOfRoomsRequested = adultCountInInteger.length;
//
//        //Database query called
//        List<Hotel> hotelListFromDB = hotelRepository.findHotel( checkOutDate, adultCountInInteger[0] );
//
//        //List initialized to hold rooms of each hotel
//        List<Room> roomsOfHotel;
//
//        //List of Hotels as the response which will be sent
//        List<List<Object[]>> hotelList = new ArrayList<>();
//
//        //variable to set as the number of room request completed
//        int roomRequestCompleted;
//
//        //variable to iterate number of rooms requested array
//        int roomRequestNo;
//
//
//        //Search requirements checked against each hotel
//        for( Hotel hotel : hotelListFromDB )
//        {
//            int totalPrice = 0;
//            List<Object[]> roomlist = new ArrayList<Object[]>();
//
//            roomsOfHotel = hotel.getRooms();
//            Collections.sort( roomsOfHotel, comparing( Room::getMaxNoOfAdult ).thenComparing( Room::getPrice ) );
//
//            roomRequestCompleted = 0;
//
//            for( Room room : roomsOfHotel )
//            {
//                int numberOfRooms = room.getRoomCount();
//                int countOfRooms = 0;
//                int adultsCount = 0;
//
//                if( roomRequestCompleted != numberOfRoomsRequested )
//                {
//                    for( roomRequestNo = roomRequestCompleted; roomRequestNo < numberOfRoomsRequested; roomRequestNo++ )
//                    {
//                        if( room.getMaxNoOfAdult() >= adultCountInInteger[roomRequestNo] && numberOfRooms - 1 >= 0 )
//                        {
//                            numberOfRooms = numberOfRooms - 1;
//                            countOfRooms++;
//                            roomRequestCompleted++;
//                            adultsCount = adultsCount + adultCountInInteger[roomRequestNo];
//                        }
//                        else
//                        {
//                            break;
//                        }
//                    }
//                    if( countOfRooms != 0 )
//                    {
//                        float pricePerPerson = ( room.getPrice() * adultsCount ) + ( ( float ) room.getPrice() * ( float ) adultsCount * ( ( float ) hotel.getPercentage() / 100 ) );
//
//
//                        int pricePerRoom = ( int ) pricePerPerson * noOfNights;
//                        totalPrice = totalPrice + pricePerRoom;
//
//                        Object[] selectedRoom = { room.getTypeName(), countOfRooms, pricePerRoom, totalPrice, hotel.getHotelName() };
//
//
//                        roomlist.add( selectedRoom );
//
//                    }
//
//                }
//                else
//                {
//                    break;
//                }
//            }
//
//
//            if( roomRequestCompleted == numberOfRoomsRequested )
//            {
//                hotelList.add( roomlist );
//
//            }
//        }

        List<List<Object[]>> hotelList = new ArrayList<>();
        return hotelList;


    }
}


