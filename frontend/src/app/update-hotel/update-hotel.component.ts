import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Inject } from '@angular/core';
import { HotelService } from '../hotel.service';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-update-hotel',
  templateUrl: './update-hotel.component.html',
  styleUrls: ['./update-hotel.component.css'],
})
export class UpdateHotelComponent implements OnInit {
  hotel1: Hotel = new Hotel();

  //To count theerrors occured
  errorCount: number = 0;

  successMessage: String = '';
  errors: String[] = [
    'This field cannot be changed',
    'This field cannot be changed',
    '',
    '',
  ]; //0th index is for hotelname,1 is for start date,2 is for end date,3 is for percentage
  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth();
  day = this.now.getDate();
  minDate = this.year + '-' + (this.month + 1) + '-' + this.day;
  maxDate = { year: this.year - 16, month: this.month + 1, day: this.day };

  constructor(
    @Inject(MAT_DIALOG_DATA) public hotel: Hotel,
    private hotelService: HotelService
  ) {}

  ngOnInit(): void {
    this.hotel1 = this.hotel;
  }

  onSubmit() {
    if (this.hotel.endDate.trim().length == 0) {
      this.errors[2] = 'Contract End Date must be selected';
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
      console.log('enjoy');
      this.hotelService
        .updateHotel(this.hotel1.hotel_id, this.hotel1)
        .subscribe((data) => console.log(data));

      this.successMessage = 'Hotel Updated Successfully';
    }
  }

  call(n: number) {
    switch (n) {
      case 1:
        this.errors[2] = '';
        this.errorCount = 0;
        this.successMessage = '';
        break;
      case 2:
        this.errors[3] = '';
        this.errorCount = 0;
        this.successMessage = '';
        break;

      default:
        break;
    }
  }
}
