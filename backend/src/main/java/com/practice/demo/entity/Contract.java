package com.practice.demo.entity;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;
import javax.persistence.OneToOne;
import javax.persistence.SequenceGenerator;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import java.util.Date;
import java.util.List;

@Entity
public class Contract
{
    @Id
    @SequenceGenerator( name = "contract_sequence", sequenceName = "contract_sequence", allocationSize = 1 )
    @GeneratedValue( strategy = GenerationType.SEQUENCE, generator = "contract_sequence" )
    @Column(name = "contractId")
    private int contractId;


    @Column(name="contractEndDate")
    @Temporal( TemporalType.DATE )
    private Date contractEndDate;


    @Column(name="contractStartDate")
    @Temporal( TemporalType.DATE )
    private Date contractStartDate;

    @Column(name="ratePercentage")
    private int ratePercentage;

    @ManyToOne( fetch = FetchType.LAZY )
    @JoinColumn(
            name = "hotelId",
            referencedColumnName = "hotelId"
    )
    private Hotel hotel;

    public Hotel getHotel()
    {
        return hotel;
    }

    public void setHotel( Hotel hotel )
    {
        this.hotel = hotel;
    }

    public List<Room> getRooms()
    {
        return rooms;
    }

    public void setRooms( List<Room> rooms )
    {
        this.rooms = rooms;
    }

    @ManyToMany
    @JoinTable(
            name = "contract_rooms",
            joinColumns = @JoinColumn(name = "contractId",referencedColumnName = "contractId"),
            inverseJoinColumns = @JoinColumn(name = "roomTypeId",referencedColumnName = "roomTypeId"))
    private List<Room> rooms;

    public Contract()
    {
    }

    public Contract( int contractId, Date contractEndDate, Date contractStartDate, int ratePercentage )
    {
        this.contractId = contractId;
        this.contractEndDate = contractEndDate;
        this.contractStartDate = contractStartDate;
        this.ratePercentage = ratePercentage;
    }

    @Override
    public String toString()
    {
        return "Contract{" +
                       "contractId=" + contractId +
                       ", contractEndDate=" + contractEndDate +
                       ", contractStartDate=" + contractStartDate +
                       ", ratePercentage=" + ratePercentage +
                       '}';
    }

    public int getContractId()
    {
        return contractId;
    }

    public void setContractId( int contractId )
    {
        this.contractId = contractId;
    }

    public Date getContractEndDate()
    {
        return contractEndDate;
    }

    public void setContractEndDate( Date contractEndDate )
    {
        this.contractEndDate = contractEndDate;
    }

    public Date getContractStartDate()
    {
        return contractStartDate;
    }

    public void setContractStartDate( Date contractStartDate )
    {
        this.contractStartDate = contractStartDate;
    }

    public int getRatePercentage()
    {
        return ratePercentage;
    }

    public void setRatePercentage( int ratePercentage )
    {
        this.ratePercentage = ratePercentage;
    }
}
