import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SarafuRoutingModule } from "./sarafu-routing.module";
import { SarafuComponent } from "./sarafu.component";
import { DashboardModule } from "../dashboard/dashboard.module";
import { SettingsModule } from "./settings/settings.module";
import { ForceupdateModule } from "./forceupdate/forceupdate.module";
import { UsersModule } from "./users/users.module";
import { RolesModule } from "./roles/roles.module";
import { IpwhitelistModule } from "./ipwhitelist/ipwhitelist.module";

@NgModule({
  declarations: [SarafuComponent],
  imports: [
    CommonModule,
    SarafuRoutingModule,
    DashboardModule,
    SettingsModule,
    ForceupdateModule,
    UsersModule,
    RolesModule,
    IpwhitelistModule
  ]
})
export class SarafuModule {}
