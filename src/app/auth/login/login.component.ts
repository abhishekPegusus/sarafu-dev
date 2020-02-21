import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup
} from "@angular/forms";

import { RouterModule, Router } from "@angular/router";
import { AuthService } from "../../service/auth.service";
import { CommonService } from '../../service/common.service';

@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  submitted = false;


  constructor(
    private router: Router,
    private cookieService: CookieService,
    public CommonService: CommonService,
    public auth: AuthService
  ) { }

  ngOnInit() {
    this.loginForm = new FormGroup({
      username: new FormControl("", [Validators.required]),
      password: new FormControl("", [Validators.required])
    });
  }
  get username() {
    return this.loginForm.get("username");
  }
  get password() {
    return this.loginForm.get("password");
  }

  authenticate() {
    this.submitted = true;

    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (response: any) => {
          // console.log('User=', response)
          if (response.token && response.token !== "") {
            this.CommonService.showToast("Login Success!!!", "You have logged-in successfully.", "success");
            this.cookieService.set("userInfo", JSON.stringify({ isLoggedIn: true, userType: "superadmin" }));
            this.router.navigate(["azam/sarafu"]);
          } else {
            this.CommonService.showToast("Login Failed!!!", "Incorrect Credentials.", "danger");
          }
        },
        (error) => {
          this.CommonService.showToast("Login Failed!!!", "Incorrect Credentials.", "danger");
        }
      );
    } else {
      this.CommonService.showToast("Invalid Inputs!!!", "Username and Password are manadatory.", "danger");
    }
  }
}
