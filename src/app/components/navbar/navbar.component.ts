import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login/login-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit(): void {
  }
  logout(): void {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
