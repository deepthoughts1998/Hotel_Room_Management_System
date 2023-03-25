import { Component, OnInit } from '@angular/core';
import { Hotel } from '../hotel';
import { HotelService } from '../hotel.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';

@Component({
  selector: 'app-add-hotel',
  templateUrl: './add-hotel.component.html',
  styleUrls: ['./add-hotel.component.css'],
})
export class AddHotelComponent implements OnInit {
  hotel: Hotel = new Hotel();

  //variable to make sure that errors are 0
  errorCount: number = 0;

  successMessage: String = '';

  errors: String[] = ['', '', '', '']; //0th index is for hotelname,1 is for start date,2 is for end date,3 is for percentage

  //--------Making the date field to set the min date ------------------
  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth();
  day = this.now.getDate();
  minDate = this.year + '-' + (this.month + 1) + '-' + this.day;

  constructor(
    @Inject(MAT_DIALOG_DATA) public hotels: Hotel[],
    private hotelService: HotelService
  ) {}

  ngOnInit(): void {
    (this.hotel.hotelName = ''),
      (this.hotel.endDate = this.minDate),
      (this.hotel.startDate = this.minDate),
      (this.hotel.percentage = 15);
  }

  onSubmit() {
    if (this.hotel.hotelName.trim().length == 0) {
      this.errors[0] = 'Hotel name field cannot be empty';
      this.errorCount = 1;
    } else if (
      this.hotels.some(
        (hotel) =>
          hotel.hotelName.toLocaleLowerCase().trim() ===
          this.hotel.hotelName.toLocaleLowerCase().trim()
      )
    ) {
      this.errors[0] = 'This hotel already exists!!!';
      this.errorCount = 1;
    }
    if (this.hotel.startDate.trim().length == 0) {
      this.errors[1] = 'Contract Start Date must be selected';
      this.errorCount = 1;
    } else if (this.hotel.startDate < this.minDate) {
      this.errors[1] = 'Contract Start Date cannot be a past date';
    }

    if (this.hotel.endDate.trim().length == 0) {
      this.errors[2] = 'Contract End Date must be selected';
      this.errorCount = 1;
    } else if (this.hotel.endDate <= this.hotel.startDate) {
      this.errors[2] =
        'Contract End Date must be greater than the contract start date';
      this.errorCount = 1;
    }

    if (this.hotel.percentage == null) {
      this.errors[3] = 'Percentage Field cannot be empty';
      this.errorCount = 1;
    } else if (this.hotel.percentage <= 0) {
      this.errors[3] =
        'Invalid percentage, Percentage should be greater than 0';
      this.errorCount = 1;
    } else if (this.hotel.percentage >= 100) {
      this.errors[3] =
        'Invalid percentage, Percentage should not be greater than 100';
      this.errorCount = 1;
    }

    if (this.errorCount == 0) {
      this.hotelService.addHotel(this.hotel).subscribe((data) => {
        console.log(data);
        this.successMessage = 'Hotel Added Successfully';
      });
    }
  }

  call(n: number) {
    switch (n) {
      case 1:
        this.errors[0] = '';
        this.errorCount = 0;
        this.successMessage = '';
        break;
      case 2:
        this.errors[1] = '';
        this.errorCount = 0;
        this.successMessage = '';
        break;
      case 3:
        this.errors[2] = '';
        this.errorCount = 0;
        this.successMessage = '';
        break;
      case 4:
        this.errors[3] = '';
        this.errorCount = 0;
        this.successMessage = '';
        break;
      default:
        break;
    }
  }
}
