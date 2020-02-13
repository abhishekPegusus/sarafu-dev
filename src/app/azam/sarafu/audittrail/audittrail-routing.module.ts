import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { AudittrailComponent } from "./audittrail.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "list",
    pathMatch: "full"
  },
  {
    path: "list",
    component: AudittrailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AudittrailRoutingModule {}
