import { Component, OnInit } from '@angular/core';
import { Inject } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Room } from '../room';
import { RoomService } from '../room.service';

@Component({
  selector: 'app-delete-room',
  templateUrl: './delete-room.component.html',
  styleUrls: ['./delete-room.component.css'],
})
export class DeleteRoomComponent implements OnInit {
  room1: Room = new Room();

  constructor(
    @Inject(MAT_DIALOG_DATA) public room: Room,
    private roomService: RoomService
  ) {}

  ngOnInit(): void {
    this.room1.roomType_id = this.room[0];
    this.room1.typeName = this.room[1];
    
  }

  deleteRoom(id: number) {
    this.roomService.deleteRoom(id).subscribe((data) => alert(data));
  }
}
