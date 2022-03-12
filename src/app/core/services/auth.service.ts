import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import firebase from "firebase/compat/app";
import { Observable } from 'rxjs';
import auth = firebase.auth;
import User = firebase.User;


@Injectable()
export class AuthService {
  user$: Observable<User | null>

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    private router: Router,
  ) {
    this.user$ = this.afAuth.authState;
  }

  async googleSignIn() {
    const provider = new auth.GoogleAuthProvider();
    const credential = await this.afAuth.signInWithPopup(provider);
    console.log(credential);
    return this.router.navigate(['/pick-room']);
  }

  async googleSignOut () {
    this.afAuth.signOut();
    console.log('logged out');
  
    return this.router.navigate(['/']);
  }
}
