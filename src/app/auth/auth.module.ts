import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { FormsModule as ngFormsModule } from "@angular/forms";
import {
  NbMenuModule,
  NbTreeGridModule,
  NbActionsModule,
  NbButtonModule,
  NbCardModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbIconModule,
  NbInputModule,
  NbRadioModule,
  NbSelectModule,
  NbTabsetModule,
  NbRouteTabsetModule,
  NbUserModule,
  NbLayoutModule,
  NbAlertModule
} from "@nebular/theme";
import { RouterModule } from "@angular/router";

import { AuthRoutingModule } from "./auth-routing.module";
import { ShareModule } from "../azam/share/share.module";
import { CookieService } from "ngx-cookie-service";
import { AuthComponent } from "./auth.component";
import { LoginComponent } from "./login/login.component";
import { ToastrComponent } from "./toastr/toastr.component";

@NgModule({
  declarations: [AuthComponent, LoginComponent, ToastrComponent],
  imports: [
    ngFormsModule,
    RouterModule,
    CommonModule,
    AuthRoutingModule,
    ShareModule,
    NbMenuModule,
    NbTreeGridModule,
    NbLayoutModule,
    NbAlertModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbUserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [CookieService]
})
export class AuthModule {}
