import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserService } from '../services/user.service';

export const authGuard: CanActivateFn = async (route, state) => {
  
  const userService = inject(UserService);
  const router = inject(Router)

  const isLoggedIn = await userService.verifyUser()

  if(!isLoggedIn){
    router.navigate(['login'])
  }
  return true;
};
