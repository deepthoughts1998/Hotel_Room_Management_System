import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-search-booking',
  templateUrl: './search-booking.component.html',
  styleUrls: ['./search-booking.component.css'],
})
export class SearchBookingComponent implements OnInit {

  
  @ViewChild('close') myDiv: ElementRef<HTMLElement>;

  //to store the search results
  results: any[];

  //String variable to construct the adults count in every room as backend accepts string only in the query string
  v: String = '';

  //--------------------form data fields--------------------------------
  date: String;
  night: number;
  //to create the room list for booking in the search form
  roomList: {
    id: number;
    count: number;
  }[] = [];

  //-----------------------------------------------------------

  //variables needed to construct the roomlist in the search form also for iterate
  r: number = 0;
  k: number = 0;
  e: number = 0;

  //variable to make sure that errors are 0
  errorCount: number = 0;

  //to show if search failed or not
  successMessage: String = '';

  errors: String[] = ['', '', '', '']; //0th index is for check in date,1 is for no of nights ,2 is for roomlist error check,3 is for roomlist error


  //--------Making the date field to set the min date ------------------
  now = new Date();
  year = this.now.getFullYear();
  month = this.now.getMonth();
  day = this.now.getDate();
  minDate = this.year + '-' + (this.month + 1) + '-' + this.day;
//----------end------------------------

  constructor(
    public dialog: MatDialog,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
    this.date = this.minDate;
    this.night = null;
    this.roomList = [];
  }

  //add method to add rooms to the roomlist to be booked
  add() {
    if (this.k <= 0) {
      this.errors[3] = 'Adults in a room cannot be less than 1';
    } else {
      this.roomList.push({ id: this.r, count: this.k });

      this.r++;
    }
  }

  //method used to remove rooms from the booked list
  remove(room, id) {
    const indexOfObject = this.roomList.findIndex((room) => {
      return room.id === id;
    });

    if (indexOfObject !== -1) {
      this.roomList.splice(indexOfObject, 1);
    }
  }

  //Search form submit
  onsubmit() {
    if (this.date.trim().length == 0) {
      this.errors[0] = 'Check in date must be given';
      this.errorCount = 1;
    } else if (this.date < this.minDate) {
      this.errors[0] = 'Check in date cannot be a past date';
      this.errorCount = 1;
    }

    if (this.night == null) {
      this.errors[1] = 'No.of nights must be given';
      this.errorCount = 1;
    } else if (this.night <= 0) {
      this.errors[1] = 'No. of nights cannot be less than 0';
      this.errorCount = 1;
    }

    if (this.roomList.length == 0) {
      this.errors[2] = 'Atleast 1 room must be given for the booking';
      this.errorCount = 1;
    }

    if (this.errorCount == 0) {

      
      this.roomList.forEach((element) => {
        if (this.errorCount == 0) {
          this.v = this.v + String(element.count);
        } else {
          this.v = this.v + ',' + String(element.count);
        }
        this.errorCount++;
      });
      this.errorCount = 0;

      this.getSome();
      this.triggerFalseClick();
    }
  }

  //method to call the close button event
  triggerFalseClick() {
    let close: HTMLElement = this.myDiv.nativeElement;
    close.click();
  }

  getSome() {
    this.bookingService
      .getResults(this.date, this.night, this.v)
      .subscribe((data) => (this.results = data));
  }

  //call method to set and rest the error messages
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
        this.errors[3] = '';
        this.errorCount = 0;
        this.successMessage = '';
        break;

      default:
        break;
    }
  }
}
