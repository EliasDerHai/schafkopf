import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { RoomService } from '../pick-room/room.service';
import { Room } from '../shared/models/room';

@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {
  room: Room | undefined;
  members = [];

  constructor(
    private route: ActivatedRoute,
    private roomService: RoomService,
  ) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        const id = params['id'];
        this.roomService.find(id).subscribe(response => this.room = response as Room);
      }
    );
  }

}
