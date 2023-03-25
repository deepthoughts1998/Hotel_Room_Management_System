import { Component, OnInit, Input } from '@angular/core';
import { Room } from '../room';
import { RoomService } from '../room.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-room',
  templateUrl: './add-room.component.html',
  styleUrls: ['./add-room.component.css'],
})
export class AddRoomComponent implements OnInit {
  room: Room = new Room();

  //Keeping track of errors
  errorCount: number = 0;

  successMessage: String = '';

  errors: String[] = ['', '', '', ''];

  constructor(
    private roomService: RoomService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.room.typeName = '';
    this.room.roomCount = null;
    this.room.maxNoOfAdult = null;
    this.room.price = null;
  }

  onSubmit() {
    if (this.room.typeName.trim().length == 0) {
      this.errors[0] = 'Room name field cannot be empty';
      this.errorCount = 1;
    }

    if (this.room.roomCount == null) {
      this.errors[1] = 'No. of rooms field cannot be empty';
      this.errorCount = 1;
    } else if (this.room.roomCount <= 0) {
      this.errors[1] = 'No. of Rooms cannot be less than 0';
      this.errorCount = 1;
    }

    if (this.room.maxNoOfAdult == null) {
      this.errors[2] = 'No. of Adults per room field cannot be empty';
      this.errorCount = 1;
    } else if (this.room.maxNoOfAdult <= 0) {
      this.errors[2] = 'No. of Adults per room cannot be less than 0';
      this.errorCount = 1;
    }

    if (this.room.price == null) {
      this.errors[3] = 'Price field cannot be empty';
      this.errorCount = 1;
    } else if (this.room.price <= 0) {
      this.errors[3] = 'Price per room cannot be less than 0';
      this.errorCount = 1;
    }

    if (this.errorCount == 0) {
      this.roomService
        .addRoom(this.route.firstChild.snapshot.params['id'], this.room)
        .subscribe((data) => console.log(data));
      this.successMessage = 'Room Added Successfully';
    }
  }

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
        this.errorCount = 0;
        this.successMessage = '';
        break;
      case 4:
        this.errors[3] = '';
        this.errorCount = 0;
        this.successMessage = '';
        break;
      default:
        break;
    }
  }
}
