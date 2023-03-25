package com.practice.demo.entity;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.List;

@Entity
public class Room
{


    @Id
    @SequenceGenerator( name = "room_sequence", sequenceName = "room_sequence", allocationSize = 1 )
    @GeneratedValue( strategy = GenerationType.SEQUENCE, generator = "room_sequence" )
    @Column(name="roomTypeId")
    private int roomTypeId;

    @Column( name = "typeName",nullable = false )
    private String typeName;

    @Column(name = "maxNoOfAdult", nullable = false )
    private int maxNoOfAdult;

    @Column( name ="roomCount" ,nullable = false )
    private int roomCount;

    @Column( name = "price",nullable = false )
    private int price;

    @JsonIgnore
    @ManyToOne( fetch = FetchType.LAZY )
    @JoinColumn(
            name = "hotelId",
            referencedColumnName = "hotelId"
    )
    private Hotel hotel;

    @ManyToMany(mappedBy = "rooms")
    private List<Contract> contracts;

    @Override
    public String toString()
    {
        return "Room{" +
                       "roomTypeId=" + roomTypeId +
                       ", typeName='" + typeName + '\'' +
                       ", maxNoOfAdult=" + maxNoOfAdult +
                       ", roomCount=" + roomCount +
                       ", price=" + price +
                       '}';
    }

    public Room()
    {
    }

    public Room( int roomTypeId, String typeName, int maxNoOfAdult, int roomCount, int price )
    {
        this.roomTypeId = roomTypeId;
        this.typeName = typeName;
        this.maxNoOfAdult = maxNoOfAdult;
        this.roomCount = roomCount;
        this.price = price;
    }

    public int getRoomTypeId()
    {
        return roomTypeId;
    }

    public void setRoomTypeId( int roomTypeId )
    {
        this.roomTypeId = roomTypeId;
    }

    public String getTypeName()
    {
        return typeName;
    }

    public void setTypeName( String typeName )
    {
        this.typeName = typeName;
    }

    public int getMaxNoOfAdult()
    {
        return maxNoOfAdult;
    }

    public void setMaxNoOfAdult( int maxNoOfAdult )
    {
        this.maxNoOfAdult = maxNoOfAdult;
    }

    public int getRoomCount()
    {
        return roomCount;
    }

    public void setRoomCount( int roomCount )
    {
        this.roomCount = roomCount;
    }

    public int getPrice()
    {
        return price;
    }

    public void setPrice( int price )
    {
        this.price = price;
    }

    public Hotel getHotel()
    {
        return hotel;
    }

    public void setHotel( Hotel hotel )
    {
        this.hotel = hotel;
    }
}
