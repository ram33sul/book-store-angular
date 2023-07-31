import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService, private router: Router){}

  handleSubmit() {
    this.userService.signup({
      username: this.username,
      password: this.password
    }).subscribe({
      next: (response) => {
        this.userService.setUserData(response.data);
        this.userService.setToken(response.token)
        this.router.navigate([''])
      },
      error: (error) => {
        alert(error.error)
      }
    })
  }

  handleLogin() {
    this.router.navigate(['/login'])
  }
}
