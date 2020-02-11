import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { SettingsComponent } from "./settings.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "list"
  },
  {
    path: "list",
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class SettingsRoutingModule {}
