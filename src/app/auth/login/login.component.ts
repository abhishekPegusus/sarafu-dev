import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup
} from "@angular/forms";
import { RouterModule, Router } from "@angular/router";

@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  constructor(private router: Router, private cookieService: CookieService) {}

  loginForm: FormGroup = new FormGroup({
    email: new FormControl("", [Validators.required]),
    password: new FormControl("", [Validators.required])
  });

  ngOnInit() {}
  authenticate() {
    console.log("VALUESSS=", this.loginForm.value);
    const formVal = this.loginForm.value;
    if (formVal.email == 1) {
      this.cookieService.set(
        "userInfo",
        JSON.stringify({ userType: "superadmin" })
      );
      this.router.navigate(["azam/sarafu"]);
    }
  }
}
