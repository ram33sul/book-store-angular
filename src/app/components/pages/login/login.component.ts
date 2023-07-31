import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  username: string = '';
  password: string = '';

  constructor(private userService: UserService) {}

  handleSubmit() {
    this.userService.login({
      username: this.username,
      password: this.password
    }).subscribe({
      next: (response) => {
        this.userService.setUserData(response.data);
        this.userService.setToken(response.token);
        console.log(this.userService.userData, this.userService.token)
      },
      error: (error) => {
        console.log('err')
      }
    })
  }
}
