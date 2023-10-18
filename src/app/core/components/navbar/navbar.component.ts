import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/modules/login/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  loggedUser = this.authService.getLoggedUser();

  isLogged = this.authService.isLoggedIn();

  constructor( private authService: AuthService, private router: Router ) {}

  logout(): void {
    this.authService.logout().then( res => {
      this.router.navigateByUrl('/login');
    }, err => {
      alert(err);
    }
    );
  }
}
