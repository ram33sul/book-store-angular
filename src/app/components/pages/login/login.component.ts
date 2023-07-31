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
      next: (res) => {
        console.log(res)
      },
      error: (err) => {
        console.log('err')
      }
    })
  }
}
