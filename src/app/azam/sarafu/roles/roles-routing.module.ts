import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { FormComponent } from "./form/form.component";
import { RolesComponent } from "./roles.component";
// import { FormInputsComponent } from "./form-inputs/form-inputs.component";
// import { FormLayoutsComponent } from "./form-layouts/form-layouts.component";
// import { DatepickerComponent } from "./datepicker/datepicker.component";
// import { ButtonsComponent } from "./buttons/buttons.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "list"
  },
  {
    path: "list",
    component: RolesComponent
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
export class RolesRoutingModule {}
