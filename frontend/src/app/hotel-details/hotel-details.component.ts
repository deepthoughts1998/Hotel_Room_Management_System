import { Component, OnInit } from '@angular/core';
import { HotelService } from '../hotel.service';
import { ActivatedRoute } from '@angular/router';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css'],
})
export class HotelDetailsComponent implements OnInit {
  //variable to store the id sent by the url parameters
  hotel_id: number;

  hotel: Hotel = new Hotel();

  constructor(
    private route: ActivatedRoute,
    private hotelService: HotelService
  ) {}

  ngOnInit(): void {
    this.hotel_id = this.route.snapshot.params['id'];
    this.hotelService
      .getHotelById(this.hotel_id)
      .subscribe((data) => (this.hotel = data));
    
  }
}
