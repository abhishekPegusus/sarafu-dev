import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { SarafuRoutingModule } from "./sarafu-routing.module";
import { SarafuComponent } from "./sarafu.component";
import { DashboardModule } from "../dashboard/dashboard.module";

@NgModule({
  declarations: [SarafuComponent],
  imports: [CommonModule, SarafuRoutingModule, DashboardModule]
})
export class SarafuModule {}
