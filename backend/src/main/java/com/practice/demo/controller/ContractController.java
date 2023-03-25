package com.practice.demo.controller;


import com.practice.demo.entity.Contract;
import com.practice.demo.entity.Hotel;
import com.practice.demo.entity.Room;
import com.practice.demo.service.ContractService;
import com.practice.demo.service.HotelService;
import com.practice.demo.service.RoomService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ContractController
{
    @Autowired
    private ContractService contractService;

    @Autowired
    private HotelService hotelService;

    @Autowired
    private RoomService roomService;

    @PostMapping("/contract")
    public Contract addContract( @RequestBody Contract contract, @RequestParam int  hotelId, @RequestParam int roomId){

        int y=hotelId+roomId;
        System.out.println(y);
        Hotel h1=hotelService.findHotelById( ( long ) hotelId );
        System.out.println(h1);


        Room r1=roomService.getRoom( roomId );
        System.out.println(r1);

        List<Room> roomList=new ArrayList<>(  );
        roomList.add( r1 );

        contract.setHotel( h1 );
        contract.setRooms( roomList );

        System.out.println("hello world");

        return contractService.addContract(contract);
    }

    @GetMapping("/contract")
    public List<Contract>  getContracts(){
        return contractService.getContracts();
    }
}
