import { Component } from '@angular/core';
import { UserService } from './services/user.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'book_store';

  constructor (private userService: UserService, private router: Router) {}

  ngOnInit() {
    // this.userService.verifyUser().then(() => {
    //   this.router.navigate([''])
    // })
  }
}
