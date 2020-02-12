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
import { RepresentativeRoutingModule } from "./representative-routing.module";
import { RepresentativeComponent } from "./representative.component";
import { ListComponent } from "./list/list.component";
import { FormComponent } from "./form/form.component";
import { FormsModule as ngFormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from "ng2-smart-table";

@NgModule({
  declarations: [RepresentativeComponent, ListComponent, FormComponent],
  imports: [
    CommonModule,
    RepresentativeRoutingModule,
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
export class RepresentativeModule {}
