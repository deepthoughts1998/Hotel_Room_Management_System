package com.practice.demo.entity;

import javax.persistence.*;
import java.util.Date;
import java.util.List;

@Entity
public class Hotel
{
    @Id
    @SequenceGenerator( name = "hotel_sequence", sequenceName = "hotel_sequence", allocationSize = 1 )
    @GeneratedValue( strategy = GenerationType.SEQUENCE, generator = "hotel_sequence" )
    @Column(name = "hotelId")
    private Long hotelId;

    @Column( name="hotelName",nullable = false, unique = true )
    private String hotelName;



    @OneToMany( mappedBy = "hotel", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY )
    private List<Contract> contracts;


    @OneToMany( mappedBy = "hotel", cascade = CascadeType.ALL, orphanRemoval = true, fetch = FetchType.LAZY )
    private List<Room> rooms;

    public Hotel()
    {
    }

    @Override
    public String toString()
    {
        return "Hotel{" +
                       "hotelId=" + hotelId +
                       ", hotelName='" + hotelName + '\'' +
                       '}';
    }

    public Hotel( Long hotelId, String hotelName )
    {
        this.hotelId = hotelId;
        this.hotelName = hotelName;
    }

    public Long getHotelId()
    {
        return hotelId;
    }

    public void setHotelId( Long hotelId )
    {
        this.hotelId = hotelId;
    }

    public String getHotelName()
    {
        return hotelName;
    }

    public void setHotelName( String hotelName )
    {
        this.hotelName = hotelName;
    }

    public List<Contract> getContracts()
    {
        return contracts;
    }

    public void setContracts( List<Contract> contracts )
    {
        this.contracts = contracts;
    }

    public List<Room> getRooms()
    {
        return rooms;
    }

    public void setRooms( List<Room> rooms )
    {
        this.rooms = rooms;
    }
}

