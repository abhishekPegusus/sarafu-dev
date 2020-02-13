import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SarafuComponent } from "./sarafu.component";

const routes: Routes = [
  {
    path: "",
    //component: SarafuComponent,
    children: [
      {
        path: "",
        redirectTo: "dashboard",
        pathMatch: "full"
      },
      {
        path: "dashboard",
        loadChildren: () =>
          import("./dashboard/dashboard.module").then(m => m.DashboardModule)
      },
      {
        path: "clients",
        loadChildren: () =>
          import("./clients/clients.module").then(m => m.ClientsModule)
      },
      {
        path: "representative",
        loadChildren: () =>
          import("./representative/representative.module").then(
            m => m.RepresentativeModule
          )
      },
      {
        path: "settings",
        loadChildren: () =>
          import("./settings/settings.module").then(m => m.SettingsModule)
      },
      {
        path: "forceupdate",
        loadChildren: () =>
          import("./forceupdate/forceupdate.module").then(
            m => m.ForceupdateModule
          )
      },
      {
        path: "users",
        loadChildren: () =>
          import("./users/users.module").then(m => m.UsersModule)
      },
      {
        path: "roles",
        loadChildren: () =>
          import("./roles/roles.module").then(m => m.RolesModule)
      },
      {
        path: "ipwhitelist",
        loadChildren: () =>
          import("./ipwhitelist/ipwhitelist.module").then(
            m => m.IpwhitelistModule
          )
      },
      {
        path: "audittrail",
        loadChildren: () =>
          import("./audittrail/audittrail.module").then(m => m.AudittrailModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SarafuRoutingModule {}
