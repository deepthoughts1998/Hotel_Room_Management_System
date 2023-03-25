import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingComponent } from './booking/booking.component';
import { HotelDetailsComponent } from './hotel-details/hotel-details.component';
import { HotelComponent } from './hotel/hotel.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';



const routes: Routes = [
  { path: 'booking', component: BookingComponent },
  {path:'hotel-details/:id',component:HotelDetailsComponent},
   { path: '', component: HotelComponent },
   { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
