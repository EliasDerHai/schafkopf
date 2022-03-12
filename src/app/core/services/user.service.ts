import { Injectable } from '@angular/core';
import firebase from "firebase/compat/app";
import { first, map, Observable, take } from 'rxjs';
import { AuthService } from './auth.service';
import User = firebase.User;

@Injectable()
export class UserService {
  user$: Observable<User | null>

  constructor(
    authService: AuthService
  ) {
    this.user$ = authService.user$;
  }

  getUserName(): Observable<string> {
    return this.user$.pipe(map(user => user?.displayName ?? 'Unknown User'));
  }

}
