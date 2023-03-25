import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { SearchBookingComponent } from '../search-booking/search-booking.component';
import { BookingService } from '../booking.service';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css'],
})
export class BookingComponent implements OnInit {
  //store search results from booking service
  searchResults: any[]=[];

  //variable to store length of search results
  lengthOfSearchResults:number;

  constructor(
    public dialog: MatDialog,
    private bookingService: BookingService
  ) {}

  ngOnInit(): void {
  }

  openSearchDialog() {
    const dialogRef = this.dialog.open(SearchBookingComponent, {
      width: '60%',
      height: 'fit-content',
    });

    dialogRef.afterClosed().subscribe((result) => {
      
      this.bookingService.results.subscribe(
        (data) => (this.searchResults = data)
      );
    });
  }
}
