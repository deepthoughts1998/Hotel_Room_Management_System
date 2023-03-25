import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from "rxjs"
import { Hotel } from './hotel';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  constructor(private http:HttpClient) { }

  getHotels():Observable<Hotel[]>{
    return this.http.get<Hotel[]>("http://localhost:8080/hotel")
  }

  addHotel(hotel:Hotel):Observable<Object>{
    return this.http.post("http://localhost:8080/hotel",hotel)
  }

  getHotelById(id:number):Observable<Hotel>{
    return this.http.get<Hotel>(`http://localhost:8080/hotel/${id}`)
  }

  updateHotel(id:number ,hotel:Hotel):Observable<Object>{
    return this.http.put(`http://localhost:8080/hotel/${id}`,hotel)
  }

  deleteHotel(id:number):Observable<any>{
    return this.http.delete(`http://localhost:8080/hotel/${id}`,{responseType: 
    'text'})
  }
}
