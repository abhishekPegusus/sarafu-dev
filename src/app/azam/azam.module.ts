import { NgModule } from "@angular/core";

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
  NbUserModule
} from "@nebular/theme";

// import { ThemeModule } from "../@theme/theme.module";
import { AzamComponent } from "./azam.component";
import { DashboardModule } from "./dashboard/dashboard.module";
import { ECommerceModule } from "./e-commerce/e-commerce.module";
import { AzamRoutingModule } from "./azam-routing.module";
import { MiscellaneousModule } from "./miscellaneous/miscellaneous.module";
import { GatewayTableComponent } from "./gateway/gateway-table.component";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { UsersModule } from "./users/users.module";

import { RolesModule } from "./roles/roles.module";
import { IpwhitelistModule } from "./ipwhitelist/ipwhitelist.module";
import { AudittrailComponent } from "./audittrail/audittrail.component";
import { CommonModule } from "@angular/common";
import { ShareModule } from "./share/share.module";
import { AuthModule } from "./auth/auth.module";

@NgModule({
  imports: [
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

    AzamRoutingModule,
    // ThemeModule,
    ShareModule,
    CommonModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
    Ng2SmartTableModule,
    UsersModule,
    RolesModule,

    AuthModule,
    IpwhitelistModule
  ],
  declarations: [AzamComponent, GatewayTableComponent, AudittrailComponent]
})
export class AzamModule {}
