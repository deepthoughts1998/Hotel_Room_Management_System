import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';

@Component({
  selector: 'app-delete-hotel',
  templateUrl: './delete-hotel.component.html',
  styleUrls: ['./delete-hotel.component.css'],
})
export class DeleteHotelComponent implements OnInit {
  popupClose: Boolean = false;

  constructor(
    @Inject(MAT_DIALOG_DATA) public hotel: Hotel,
    private hotelService: HotelService
  ) {}

  ngOnInit(): void {}

  deleteHotel(id: number) {
    this.hotelService
      .deleteHotel(this.hotel.hotel_id)
      .subscribe((data) => alert(data));
    this.popupClose = true;
  }
}
