import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs"

@Injectable({
  providedIn: 'root'
})
export class BookingService {
  results:any;

  constructor(private http:HttpClient) { }

  getResults(checkInDate:String,noOfNights:number,rooms:String):Observable<any>{
    this.results=this.http.get<any>(`http://localhost:8080/booking?checkInDate=${checkInDate}&noOfNights=${noOfNights}&adultCount=${rooms}`)
    return this.results;
  }
}
