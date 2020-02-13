import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalDataSource } from "ng2-smart-table";

import { SmartTableData } from "../../../@core/data/smart-table";

@Component({
  selector: "ngx-smart-table",
  templateUrl: "./roles.component.html",
  styleUrls: ["./roles.component.scss"]
})
export class RolesComponent {
  moduleName = "";
  settings = {
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>'
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>'
    },
    delete: {
      deleteButtonContent: '<i class="nb-trash"></i>',
      confirmDelete: true
    },
    columns: {
      id: {
        title: "ID",
        type: "number"
      },
      firstName: {
        title: "First Name",
        type: "string"
      },
      lastName: {
        title: "Last Name",
        type: "string"
      },
      username: {
        title: "Username",
        type: "string"
      },
      email: {
        title: "E-mail",
        type: "string"
      },
      age: {
        title: "Age",
        type: "number"
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private route: ActivatedRoute, private service: SmartTableData) {
    const data = this.service.getData();
    this.source.load(data);
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.moduleName = params.type;
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
