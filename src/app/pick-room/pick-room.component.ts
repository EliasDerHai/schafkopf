import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { firstValueFrom } from 'rxjs';
import { UserService } from '../core/services/user.service';
import { Room } from '../shared/models/room';
import { RoomService } from './room.service';

@Component({
  selector: 'app-pick-room',
  templateUrl: './pick-room.component.html',
  styleUrls: ['./pick-room.component.scss']
})
export class PickRoomComponent {

  constructor(
    private userService: UserService,
    private roomService: RoomService,
    private router: Router
  ) { }

  async onCreateClick() {
    const user = await firstValueFrom(this.userService.user$);

    if (!user) {
      throw Error('User not available');
    }

    const createUserDto = {
      name: user.displayName + '\'s Room',
      host: user.uid,
    }

    this.roomService.create(createUserDto).subscribe(response => {
      const room: Room = response as Room;
      this.router.navigate(['room/' + room.id]);
    });
  }
}
