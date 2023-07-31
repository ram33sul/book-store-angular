import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router) {}

  handleSubmit() {
    this.userService.login({
      username: this.username,
      password: this.password
    }).subscribe({
      next: (response) => {
        this.userService.setUserData(response.data);
        this.userService.setToken(response.token);
        this.router.navigate([''])
      },
      error: (error) => {
        alert(error.error)
      }
    })
  }

  handleSignup() {
    this.router.navigate(['signup'])
  }
}
