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
    }).subscribe((response) => {
      console.log(response)
    })
  }
}
