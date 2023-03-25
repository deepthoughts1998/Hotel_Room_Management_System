package com.practice.demo.repository;

import com.practice.demo.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface RoomRepository extends JpaRepository<Room,Integer>
{

    @Query( value = "SELECT r.room_type_id,r.type_Name,r.room_count,r.max_no_of_adult,r.price from room r where hotel_id=?1", nativeQuery = true )
    List<Object[]> findByHotelId( Long hotel_id );

    @Query( value = "SELECT * from room r join hotel h  on r.hotel_id=h.hotel_id where h.end_Date > ?1 and r.max_no_of_adult>=?2 order by h.hotel_id,r.max_no_of_adult ", nativeQuery = true )
    List<Room> findRoom( LocalDate a, int i );


}

