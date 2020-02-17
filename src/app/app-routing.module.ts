import { ExtraOptions, RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";
import {
  NbAuthComponent,
  NbLoginComponent,
  NbLogoutComponent,
  NbRegisterComponent,
  NbRequestPasswordComponent,
  NbResetPasswordComponent
} from "@nebular/auth";
import { AuthGuard } from './authguard/auth.guard';


const routes: Routes = [
  // {
  //   path: "pages",
  //   loadChildren: () =>
  //     import("app/pages/pages.module").then(m => m.PagesModule)
  // },
  {
    path: "azam",
    loadChildren: () => import("./azam/azam.module").then(m => m.AzamModule),
    canActivate: [AuthGuard]
  },
  {
    path: "auth",
    loadChildren: () => import("./auth/auth.module").then(m => m.AuthModule)
  },
  {
    path: "authh",
    component: NbAuthComponent,
    children: [
      {
        path: "",
        component: NbLoginComponent
      },
      {
        path: "login",
        component: NbLoginComponent
      },
      {
        path: "register",
        component: NbRegisterComponent
      },
      {
        path: "logout",
        component: NbLogoutComponent
      },
      {
        path: "request-password",
        component: NbRequestPasswordComponent
      },
      {
        path: "reset-password",
        component: NbResetPasswordComponent
      }
    ]
  },
  { path: "", redirectTo: "auth", pathMatch: "full" },
  { path: "**", redirectTo: "auth" }
];

const config: ExtraOptions = {
  useHash: false
};

@NgModule({
  imports: [RouterModule.forRoot(routes, config)],
  exports: [RouterModule],
  providers: [AuthGuard]
})
export class AppRoutingModule { }
