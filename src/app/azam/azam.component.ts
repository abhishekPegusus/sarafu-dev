import { Component } from "@angular/core";

import { MENU_ITEMS } from "./azam-menu";

@Component({
  selector: "ngx-pages",
  styleUrls: ["azam.component.scss"],
  template: `
    <ngx-one-column-layout>
      <nb-menu [items]="menu"></nb-menu>
      <router-outlet></router-outlet>
    </ngx-one-column-layout>
  `
})
export class AzamComponent {
  menu = MENU_ITEMS;
}
