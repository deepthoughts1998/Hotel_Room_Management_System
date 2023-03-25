package com.practice.demo.controller;


import com.practice.demo.entity.Hotel;
import com.practice.demo.service.HotelService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


/**
 * Controller for all functions related to hotel
 */
@RestController
@CrossOrigin
public class HotelController
{

    @Autowired
    private HotelService hotelService;

    private Logger LOGGER = LoggerFactory.getLogger( HotelController.class );


    /**
     * @param hotel -The new hotel to be added
     * @return The saved hotel object
     */
    @PostMapping( "/hotel" )
    public ResponseEntity<Hotel> addHotel( @RequestBody Hotel hotel )
    {
        LOGGER.info( "Post request received for /hotel" );
        Hotel hotel1 = hotelService.addHotel( hotel );
        return new ResponseEntity<>( hotel1, HttpStatus.CREATED );
    }


    /**
     * @return The list of the hotels in database
     */
    @GetMapping( "/hotel" )
    public ResponseEntity<List<Hotel>> getHotel()
    {
        LOGGER.info( "Get request received for /hotel" );
        List<Hotel> hotelList = hotelService.gethotel();
        return new ResponseEntity<>( hotelList, HttpStatus.OK );
    }

    /**
     * @param hotel_id - The id of the hotel requested
     * @return The hotel object which the Id belongs to
     */
    @GetMapping( "/hotel/{id}" )
    public ResponseEntity<Hotel> findHotelById( @PathVariable( "id" ) Long hotel_id )
    {
        LOGGER.info( "Get request received for /hotel/:id" );
        Hotel hotel1 = hotelService.findHotelById( hotel_id );
        return new ResponseEntity<>( hotel1, HttpStatus.OK );
    }


    /**
     * @param hotel_id -The id of the hotel to be updated
     * @param hotel    -The update details of the hotel
     * @return -The updated hotel object
     */
    @PutMapping( "/hotel/{id}" )
    public ResponseEntity<Hotel> updateHotel( @PathVariable( "id" ) Long hotel_id, @RequestBody Hotel hotel )
    {
        LOGGER.info( "Put request received for /hotel/:id" );
        Hotel hotel1 = hotelService.updateHotel( hotel_id, hotel );
        return new ResponseEntity<>( hotel1, HttpStatus.OK );
    }

    /**
     * @param hotel_id -The id of the hotel to be deleted
     * @return String message "Successfully deleted"
     */
    @DeleteMapping( "/hotel/{id}" )
    public ResponseEntity<String> deleteHotel( @PathVariable( "id" ) Long hotel_id )
    {
        LOGGER.info( "Delete request received for /hotel" );
        hotelService.deleteHotel( hotel_id );
        return new ResponseEntity<>( "Successfully Deleted", HttpStatus.OK );
    }


}
