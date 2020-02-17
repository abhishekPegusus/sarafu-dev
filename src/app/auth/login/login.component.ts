import { Component, OnInit } from "@angular/core";
import { CookieService } from "ngx-cookie-service";
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup
} from "@angular/forms";
import { RouterModule, Router } from "@angular/router";
import {
  NbComponentStatus,
  NbGlobalPhysicalPosition,
  NbToastrService
} from "@nebular/theme";
import { AuthService } from "../../service/auth.service";

@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  submitted = false;
  statusSuccess: NbComponentStatus = "success";
  statusDanger: NbComponentStatus = "danger";

  constructor(
    private router: Router,
    private cookieService: CookieService,
    public toastrService: NbToastrService,
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
    const config = {
      status: this.statusDanger,
      destroyByClick: true,
      duration: 5000,
      hasIcon: true,
      position: NbGlobalPhysicalPosition.TOP_RIGHT,
      preventDuplicates: true
    };
    this.submitted = true;

    if (this.loginForm.valid) {
      this.auth.login(this.loginForm.value).subscribe(
        (response: any) => {
          if (response.token && response.token !== "") {
            config.status = this.statusSuccess;
            this.toastrService.show("You have logged-in successfully.", "Login Success!!!", config);
            this.cookieService.set("userInfo", JSON.stringify({ isLoggedIn: true, userType: "superadmin" }));
            this.router.navigate(["azam/sarafu"]);
          }
        },
        error => {
          this.toastrService.show(
            "Incorrect Credentials.",
            "Login Failed!!!",
            config
          );
        }
      );
    } else {
      this.toastrService.show(
        "Username and Password are manadatory.",
        "Invalid Values!!!",
        config
      );
    }
  }
}
