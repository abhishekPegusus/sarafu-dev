import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FormComponent } from "./form/form.component";
import { IpwhitelistComponent } from "./ipwhitelist.component";
// import { FormInputsComponent } from "./form-inputs/form-inputs.component";
// import { FormLayoutsComponent } from "./form-layouts/form-layouts.component";
// import { DatepickerComponent } from "./datepicker/datepicker.component";
// import { ButtonsComponent } from "./buttons/buttons.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full"
  },
  {
    path: "list",
    component: IpwhitelistComponent
  },
  {
    path: "add",
    component: FormComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IpwhitelistRoutingModule {}
