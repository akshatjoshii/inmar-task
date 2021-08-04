import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {LoginService} from '../../services/login/login-service.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: any;
  constructor(private router: Router, private loginService: LoginService) { }

  ngOnInit(): void {
    const user = this.loginService.getUser();
    if (user) {
      this.router.navigate(['/home']);
    }
  }
  onLogin(f: NgForm): any {
    const username = f.value.username;
    this.loginService.loginUser().subscribe((data: any[]) => {
      const index = data.findIndex(user => user.username === username);
      if (index === -1) {
        this.errorMessage = `No user with username ${username} was found.`;
      } else {
        this.errorMessage = false;
        this.loginService.setUser(data[index]);
        this.router.navigate(['/home']);
      }
    });
  }
}
