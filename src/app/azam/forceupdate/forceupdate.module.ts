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
import { ForceupdateRoutingModule } from "./forceupdate-routing.module";
import { UsersComponent } from "./user/users.component";
import { FeatureComponent } from "./feature/feature.component";
import { FormsModule as ngFormsModule } from "@angular/forms";
import { Ng2SmartTableModule } from "ng2-smart-table";
import { UiSwitchModule } from "ngx-toggle-switch";
import { ShareModule } from "../share/share.module";

@NgModule({
  imports: [
    //  ThemeModule,
    ShareModule,
    NbInputModule,
    NbCardModule,
    NbButtonModule,
    NbActionsModule,
    NbUserModule,
    NbCheckboxModule,
    NbRadioModule,
    NbDatepickerModule,
    ForceupdateRoutingModule,
    NbSelectModule,
    NbIconModule,
    ngFormsModule,
    Ng2SmartTableModule,
    UiSwitchModule
  ],
  declarations: [UsersComponent, FeatureComponent]
})
export class ForceupdateModule {}
