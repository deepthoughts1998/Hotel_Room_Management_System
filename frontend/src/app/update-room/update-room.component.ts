import { Component, OnInit } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import {Inject} from "@angular/core"
import { Room } from '../room';
import { RoomService } from '../room.service';


@Component({
  selector: 'app-update-room',
  templateUrl: './update-room.component.html',
  styleUrls: ['./update-room.component.css']
})
export class UpdateRoomComponent implements OnInit {
  
  room1:Room=new Room
  w: number = 0;
  successMessage:String=""
  errors: String[] = ['', '', '', ''];

  constructor(@Inject(MAT_DIALOG_DATA) public room: Room,private roomService:RoomService) {
    
  }

 ngOnInit(): void {
  this.room1.roomType_id=this.room[0];
  this.room1.typeName=this.room[1];
  this.room1.roomCount=this.room[2];
  this.room1.maxNoOfAdult=this.room[3];
  this.room1.price=this.room[4];

  console.log(this.room1)
 }

 onSubmit(){

  
  if (this.room1.typeName.trim().length == 0) {
    this.errors[0] = 'Room name field cannot be empty';
    this.w = 1;
  }
  
  if (this.room1.roomCount == null) {
    this.errors[1] = 'No. of rooms field cannot be empty';
    this.w = 1;
  } else if (this.room1.roomCount <= 0 ) {
    this.errors[1] =
      'No. of Rooms cannot be less than 0';
    this.w = 1;}


    if (this.room1.maxNoOfAdult == null) {
      this.errors[2] = 'No. of Adults per room field cannot be empty';
      this.w = 1;
    } else if (this.room1.maxNoOfAdult <= 0 ) {
      this.errors[2] =
        'No. of Adults per room cannot be less than 0';
      this.w = 1;}

      if (this.room1.price == null) {
        this.errors[3] = 'Price field cannot be empty';
        this.w = 1;
      } else if (this.room1.price <= 0 ) {
        this.errors[3] =
          'Price per room cannot be less than 0';
        this.w = 1;}
  
console.log(this.w)
  if (this.w == 0) {
    console.log('enjoy');
    this.roomService.updateRoom(this.room1.roomType_id,this.room1).subscribe(data =>console.log(data))
  
      this.successMessage="Room Updated Successfully"
    
  }
   
   
  
 }

 call(n: number) {
  switch (n) {
    case 1:
      this.errors[0] = '';
      this.w = 0;
      this.successMessage=""
      break;
    case 2:
      this.errors[1] = '';
      this.w = 0;
      this.successMessage=""
      break;
    case 3:
      this.errors[2] = '';
      this.w = 0;
      this.successMessage=""
      break;
    case 4:
      this.errors[3] = '';
      this.w = 0;
      this.successMessage=""
      break;
    default:
      break;
  }
}

}
