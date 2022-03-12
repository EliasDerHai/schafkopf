import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  constructor(private router: Router,
    public userService: UserService,
    private authService: AuthService
  ) {
  }

  onMaxImgClick() {
    this.router.navigateByUrl('/');
  }

  onLogoutClick() {
    this.authService.googleSignOut();
  }

}
