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
  NbUserModule,
  NbToggleModule
} from "@nebular/theme";
import { NgOptionHighlightModule } from '@ng-select/ng-option-highlight';
import { NgSelectModule } from '@ng-select/ng-select';
import { NbMomentDateModule } from '@nebular/moment';
import { ClientsRoutingModule } from "./clients-routing.module";
import { ClientsComponent } from "./clients.component";
import { ListComponent } from "./list/list.component";
import { FormComponent } from "./form/form.component";
import { FormsModule as ngFormsModule, ReactiveFormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from "ng2-smart-table";

@NgModule({
  declarations: [ClientsComponent, ListComponent, FormComponent],
  imports: [
    NgOptionHighlightModule,
    NgSelectModule,
    NbToggleModule,
    CommonModule,
    ClientsRoutingModule,
    Ng2SmartTableModule,
    ngFormsModule,
    ReactiveFormsModule,
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
    NbMomentDateModule
  ]
})
export class ClientsModule { }
