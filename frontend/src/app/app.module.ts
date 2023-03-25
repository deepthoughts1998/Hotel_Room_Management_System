import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from '../material.module';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { FlexLayoutModule } from '@angular/flex-layout';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

import { NgxPaginationModule } from 'ngx-pagination';



import { AppComponent } from './app.component';
import { BookingComponent } from './booking/booking.component';
import { HotelComponent } from './hotel/hotel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UpdateHotelComponent } from './update-hotel/update-hotel.component';
import { AddHotelComponent } from './add-hotel/add-hotel.component';
import { DeleteHotelComponent } from './delete-hotel/delete-hotel.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { RoomComponent } from './room/room.component';
import { AddRoomComponent } from './add-room/add-room.component';
import { UpdateRoomComponent } from './update-room/update-room.component';
import { DeleteRoomComponent } from './delete-room/delete-room.component';
import { SearchBookingComponent } from './search-booking/search-booking.component';


@NgModule({
  declarations: [
    AppComponent,
    BookingComponent,
    HotelComponent,
    PageNotFoundComponent,
    UpdateHotelComponent,
    AddHotelComponent,
    DeleteHotelComponent,
    HotelDetailsComponent,
    RoomComponent,
    AddRoomComponent,
    UpdateRoomComponent,
    DeleteRoomComponent,
    SearchBookingComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    HttpClientModule,
    FormsModule,
    FlexLayoutModule,
    Ng2SearchPipeModule,
    NgxPaginationModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
