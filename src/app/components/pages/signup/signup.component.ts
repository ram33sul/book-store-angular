import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  password: string = '';

  constructor(private userService: UserService){}

  handleSubmit() {
    this.userService.signup({
      username: this.username,
      password: this.password
    }).subscribe({
      next: (response) => {
        this.userService.setUserData(response.data);
        this.userService.setToken(response.token)
        console.log(this.userService.userData, this.userService.token)
      },
      error: (error) => {
        console.log(error.error)
      }
    })
  }
}
