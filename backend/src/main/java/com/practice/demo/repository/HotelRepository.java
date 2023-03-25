package com.practice.demo.repository;

import com.practice.demo.entity.Hotel;
import com.practice.demo.entity.Room;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface HotelRepository extends JpaRepository<Hotel,Long>
{

    @Query( value = "SELECT distinct * from hotel h join room r  on h.hotel_id=r.hotel_id where h.end_Date >= ?1 and r.max_no_of_adult>=?2 group by h.hotel_id order by r.max_no_of_adult,r.price ", nativeQuery = true )
    List<Hotel> findHotel( LocalDate a, int i );


}
