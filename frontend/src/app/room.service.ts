import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from './room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(private http:HttpClient) { }

  getRooms(id:number):Observable<Room[]>{
    return this.http.get<Room[]>(`http://localhost:8080/room/${id}`)
  }

  addRoom(id:number,room:Room):Observable<Object>{
    return this.http.post(`http://localhost:8080/room/${id}`,room)
  }

  updateRoom(id:number ,room:Room):Observable<Object>{
    return this.http.put(`http://localhost:8080/room/${id}`,room)
  }

  deleteRoom(id:number):Observable<any>{
    return this.http.delete(`http://localhost:8080/room/${id}`,{responseType: 
    'text'})
  }

}
