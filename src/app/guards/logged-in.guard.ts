import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const loggedInGuard: CanActivateFn = (route, state) => {

  const userService = inject(UserService);
  const router = inject(Router)

  if(userService.userData){
    router.navigate([''])
  }
  return true;
};
