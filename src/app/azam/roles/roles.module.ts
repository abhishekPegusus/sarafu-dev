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
  NbUserModule
} from "@nebular/theme";

// import { ThemeModule } from "../../@theme/theme.module";
import { RolesRoutingModule } from "./roles-routing.module";
import { RolesComponent } from "./roles.component";
//import { FormInputsComponent } from "./form-inputs/form-inputs.component";
import { FormComponent } from "./form/form.component";
//import { DatepickerComponent } from "./datepicker/datepicker.component";
//import { ButtonsComponent } from "./buttons/buttons.component";
import { FormsModule as ngFormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ShareModule } from "../share/share.module";

@NgModule({
  imports: [
    // ThemeModule,
    ShareModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    RolesRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    Ng2SmartTableModule
  ],
  declarations: [
    RolesComponent,
    //ButtonsComponent,
    //FormInputsComponent,
    FormComponent
    // DatepickerComponent
  ]
})
export class RolesModule {}
