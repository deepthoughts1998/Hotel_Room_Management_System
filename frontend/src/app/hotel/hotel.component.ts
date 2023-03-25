import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';

import { HotelService } from '../hotel.service';

import { UpdateHotelComponent } from '../update-hotel/update-hotel.component';
import { AddHotelComponent } from '../add-hotel/add-hotel.component';
import { DeleteHotelComponent } from '../delete-hotel/delete-hotel.component';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.css'],
})
export class HotelComponent implements OnInit {
  //to store the hotel list
  hotels: Hotel[] = [];

  //variable needed to carry the search functionality
  name: String;

  //To do the pagination
  p: number = 1;

  constructor(
    public dialog: MatDialog,
    private hotelService: HotelService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getHotels();
  }

  getHotels() {
    this.hotelService.getHotels().subscribe((data) => (this.hotels = data));
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddHotelComponent, {
      data:this.hotels,
      width: '60%',
      height: 'fit-content',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getHotels();
    });
  }

  openUpdateDialog(hotel: Hotel) {
    const dialogRef = this.dialog.open(UpdateHotelComponent, {
      data: hotel,
      width: '60%',
      height: 'fit-content',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getHotels();
    });
  }

  openDeleteDialog(hotel: Hotel) {
    const dialogRef = this.dialog.open(DeleteHotelComponent, {
      data: hotel,
      width: 'fit-content',
      height: 'fit-content',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getHotels();
    });
  }

  //to see more details of the hotel
  openHotelDetails(id: number) {
    this.router.navigate(['hotel-details', id]);
  }

  //Search functionality by name
  Search() {
    if (this.name == '') {
      this.ngOnInit();
    } else {
      this.hotels = this.hotels.filter((hotel) => {
        return hotel.hotelName
          .toLocaleLowerCase()
          .match(this.name.toLocaleLowerCase());
      });
    }
  }
}
