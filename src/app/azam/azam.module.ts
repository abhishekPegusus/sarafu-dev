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
import { CommonModule } from "@angular/common";
import { ShareModule } from "./share/share.module";

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
    Ng2SmartTableModule
  ],
  declarations: [AzamComponent, GatewayTableComponent]
})
export class AzamModule {}
