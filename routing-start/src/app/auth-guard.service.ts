import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs/observable';
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private auth:AuthServiceService, private router:Router) { }


  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):
  Observable<boolean> | Promise<boolean>  | boolean {


  return  this.auth.isAuthenticated()
    .then(
      (authenticated:boolean) => {
       if(authenticated){
          return true
       }else{
          this.router.navigate(['/'])
       }
      }
    )
  }
}
