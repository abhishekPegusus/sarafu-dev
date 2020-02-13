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
import { UsersRoutingModule } from "./users-routing.module";
import { UsersComponent } from "./users.component";
import { FormComponent } from "./form/form.component";
import { FormsModule as ngFormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { ShareModule } from "../../share/share.module";

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
    UsersRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    Ng2SmartTableModule
  ],
  declarations: [
    UsersComponent,
    //ButtonsComponent,
    //FormInputsComponent,
    FormComponent
    // DatepickerComponent
  ]
})
export class UsersModule {}
