import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { MatDialog } from '@angular/material/dialog';
import { AddRoomComponent } from '../add-room/add-room.component';
import { UpdateRoomComponent } from '../update-room/update-room.component';
import { DeleteRoomComponent } from '../delete-room/delete-room.component';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.css'],
})
export class RoomComponent implements OnInit {
  @Input() hotel_id: number;
  rooms: Room[];
  constructor(private roomService: RoomService, public dialog: MatDialog) {}

  ngOnInit(): void {
    this.getRooms();
  }

  getRooms() {
    this.roomService
      .getRooms(this.hotel_id)
      .subscribe((data) => (this.rooms = data));
  }

  openAddDialog() {
    const dialogRef = this.dialog.open(AddRoomComponent, {
      width: '60%',
      height: 'fit-content',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getRooms();
    });
  }

  openUpdateDialog(room: Room) {
    const dialogRef = this.dialog.open(UpdateRoomComponent, {
      data: room,
      width: '60%',
      height: 'fit-content',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getRooms();
    });
  }

  openDeleteDialog(room: Room) {
    const dialogRef = this.dialog.open(DeleteRoomComponent, {
      data: room,
      width: 'fit-content',
      height: 'fit-content',
    });
    dialogRef.afterClosed().subscribe((result) => {
      this.getRooms();
    });
  }
}
