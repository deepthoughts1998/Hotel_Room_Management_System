package com.practice.demo.controller;

import com.practice.demo.service.BookingService;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;

/**
 * Controller for the search function
 */
@RestController
@CrossOrigin
public class BookingController
{

    @Autowired
    private BookingService bookingService;

    private Logger LOGGER = LoggerFactory.getLogger( BookingController.class );

    /**
     * @param checkInDate -The date customer checks in
     * @param noOfNights  -The no of nights te room needs to be booked for
     * @param adultCount  -the number of people staying in rooms
     * @return
     */
    @GetMapping( "/booking" )
    public ResponseEntity<List<List<Object[]>>> showDetails( @RequestParam String checkInDate, @RequestParam int noOfNights, @RequestParam String adultCount )
    {
        LOGGER.info( "Request for search received" );
        LocalDate checkDate = LocalDate.parse( checkInDate );

        List<List<Object[]>> searchResults = this.bookingService.getHotel( checkDate, noOfNights, adultCount );
        return new ResponseEntity<>( searchResults, HttpStatus.OK );

    }

}
