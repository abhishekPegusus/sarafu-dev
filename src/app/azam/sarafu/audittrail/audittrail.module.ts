import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
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
  NbUserModule
} from "@nebular/theme";
import { AudittrailRoutingModule } from "./audittrail-routing.module";
import { AudittrailComponent } from "./audittrail.component";
import { FormsModule as ngFormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from "ng2-smart-table";
@NgModule({
  declarations: [AudittrailComponent],
  imports: [
    CommonModule,
    AudittrailRoutingModule,
    NbActionsModule,
    NbButtonModule,
    NbCardModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbIconModule,
    NbInputModule,
    NbRadioModule,
    NbSelectModule,
    NbUserModule,
    ngFormsModule,
    Ng2SmartTableModule
  ]
})
export class AudittrailModule {}
