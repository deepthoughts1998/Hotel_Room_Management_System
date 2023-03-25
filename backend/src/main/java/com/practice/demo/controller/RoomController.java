package com.practice.demo.controller;

import com.practice.demo.entity.Hotel;
import com.practice.demo.entity.Room;
import com.practice.demo.service.HotelService;
import com.practice.demo.service.RoomService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

/**
 * Controller for all functions related to room types
 */
@RestController
@CrossOrigin
public class RoomController
{


    @Autowired
    private RoomService roomService;

    @Autowired
    private HotelService hotelService;

    private Logger LOGGER = LoggerFactory.getLogger( RoomController.class );

    /**
     * @param hotel_id-The id of the hotel to which the rooms belong to
     * @return room list of the particular hotel
     */
    @GetMapping( "/room/{id}" )
    public ResponseEntity<List<Object[]>> getRooms( @PathVariable( "id" ) Long hotel_id )
    {
        LOGGER.info( "Get request received for /room/:id" );
        List<Object[]> roomList = roomService.getRooms( hotel_id );
        return new ResponseEntity<>( roomList, HttpStatus.OK );
    }


    /**
     * @param hotel_id - The id of the hotel to which the room belong to
     * @param room     - The details of the new room type
     * @return The saved room object
     */
    @PostMapping( "/room/{id}" )
    public ResponseEntity<Room> addRoom( @PathVariable( "id" ) Long hotel_id, @RequestBody Room room )
    {
        LOGGER.info( "Post request received for /room/:id" );
        Hotel h1 = hotelService.findHotelById( hotel_id );
        room.setHotel( h1 );
        Room room1 = roomService.addRoom( room );
        return new ResponseEntity<>( room1, HttpStatus.CREATED );
    }

    /**
     * @param roomTypeId -The id of the room type to be updated
     * @param room       - The update details of the room type
     * @return The updated room object
     */
    @PutMapping( "/room/{id}" )
    public ResponseEntity<Room> updateRoom( @PathVariable( "id" ) int roomTypeId, @RequestBody Room room )
    {
        LOGGER.info( "Put request received for /room/:roomId" );
        Room room1 = roomService.updateRoom( roomTypeId, room );
        return new ResponseEntity<>( room1, HttpStatus.OK );
    }

    /**
     * @param roomTypeId -The id of the room type to be deleted
     * @return String message "Successfully deleted"
     */
    @DeleteMapping( "/room/{id}" )
    public ResponseEntity<String> deleteRoom( @PathVariable( "id" ) int roomTypeId )
    {
        LOGGER.info( "Delete request received for /room/:roomId" );
        roomService.deleteRoom( roomTypeId );
        return new ResponseEntity<>( "Successfully Deleted", HttpStatus.OK );
    }


}
