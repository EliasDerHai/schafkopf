import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { AuthService } from '../../services/auth.service';
import { userInfo } from 'os';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  username: string = '';
  userIcon: string = '';

  constructor(private router: Router,
    private auth: AuthService,
    private http: HttpClient) {

  }

  ngOnInit(): void {
    this.auth.user$.subscribe(async user => {
      this.username = user?.displayName ? user?.displayName : '';
      const userIcon = user?.photoURL ? user?.photoURL : '';

      if (user?.photoURL) {
        console.log(user.photoURL);
        const x = await this.http.get('/google' + user.photoURL).toPromise();
        console.log(x);
        
      }
    });
  }

  onImgClick() {
    this.router.navigateByUrl('/');
  }

}
