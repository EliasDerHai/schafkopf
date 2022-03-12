import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { CreateRoomDto } from '../shared/models/room';

@Injectable({
  providedIn: 'root'
})
export class RoomService {

  constructor(
    private httpClient: HttpClient,
  ) { }

  create(createRoomDto: CreateRoomDto) {
    return this.httpClient.post('/api/room', createRoomDto);
  }

  find(id: number) {
    return this.httpClient.get('/api/room/' + id);
  }
}
