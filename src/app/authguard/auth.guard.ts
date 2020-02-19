import { Injectable } from '@angular/core';
import { CanActivate, CanActivateChild, Router, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CookieService } from "ngx-cookie-service";

@Injectable()
export class AuthGuard implements CanActivate {


  constructor(private router: Router, private cookieService: CookieService) { }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.verifyLogin(url);
  }

  verifyLogin(url): boolean {
    if (!this.isLoggedIn()) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    else if (this.isLoggedIn()) {
      return true;
    }
  }
  public isLoggedIn(): boolean {
    let status = false;
    const cookieVal = this.cookieService.get('userInfo') != "" ? JSON.parse(this.cookieService.get('userInfo')) : {};
    // let cookieVal = {};
    // if (loginStatus) {
    //   cookieVal = JSON.parse(loginStatus);
    // }
    console.log("Auth Guard=", cookieVal)
    if (cookieVal && cookieVal.isLoggedIn && cookieVal.isLoggedIn == true) {

      status = true;
    }
    else {
      status = false;
    }
    return status;
  }
}