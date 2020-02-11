import { NgModule } from "@angular/core";
import {
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

// import { ThemeModule } from "../../@theme/theme.module";
import { SettingsRoutingModule } from "./settings-routing.module";
//import { TabsComponent } from "./tabs/tabs.component";

import { FormsModule as ngFormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { UiSwitchModule } from "ngx-toggle-switch";
import { TransportationComponent } from "./transportation/transportation.component";
import { ReportComponent } from "./report/report.component";
import { TransactionComponent } from "./transaction/transaction.component";
import { RiskComponent } from "./risk/risk.component";
import { ReconciliationComponent } from "./reconciliation/reconciliation.component";
import { NetsuitComponent } from "./netsuit/netsuit.component";
import { SettingsComponent } from "./settings.component";
import { ShareModule } from "../share/share.module";

@NgModule({
  imports: [
    // ThemeModule,
    ShareModule,
    NbInputModule,
    NbTabsetModule,
    NbRouteTabsetModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    SettingsRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    Ng2SmartTableModule,
    UiSwitchModule
  ],
  declarations: [
    // TabsComponent,
    TransportationComponent,
    ReportComponent,
    TransactionComponent,
    RiskComponent,
    ReconciliationComponent,
    NetsuitComponent,
    SettingsComponent
  ]
})
export class SettingsModule {}
