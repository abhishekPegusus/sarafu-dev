import { NgModule } from "@angular/core";
import { NbCardModule } from "@nebular/theme";
import { CKEditorModule } from "ng2-ckeditor";

// import { ThemeModule } from '../../@theme/theme.module';

import {
  EditorsRoutingModule,
  routedComponents
} from "./editors-routing.module";
import { ShareModule } from "../share/share.module";

@NgModule({
  imports: [
    NbCardModule,
    // ThemeModule,
    ShareModule,
    EditorsRoutingModule,
    CKEditorModule
  ],
  declarations: [...routedComponents]
})
export class EditorsModule {}
