import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { UsersComponent } from "./user/users.component";
import { FeatureComponent } from "./feature/feature.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "list"
  },
  {
    path: "user",
    component: UsersComponent
  },
  {
    path: "feature",
    component: FeatureComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ForceupdateRoutingModule {}
