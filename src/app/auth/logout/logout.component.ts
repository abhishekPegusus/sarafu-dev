import { Component, OnInit } from '@angular/core';
import { CookieService } from "ngx-cookie-service";
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'ngx-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.scss']
})
export class LogoutComponent implements OnInit {

  constructor(private cookieService: CookieService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.logout();
  }
  logout() {
    this.cookieService.set("userInfo", JSON.stringify({ isLoggedIn: false, userType: "" }));
    this.router.navigate(["/auth/login"]);
  }
}
