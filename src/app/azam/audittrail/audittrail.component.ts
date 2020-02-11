import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalDataSource } from "ng2-smart-table";

import { SmartTableData } from "../../@core/data/smart-table";
import { FeatureTableData } from "../../@core/data/feature-table";

@Component({
  selector: "sfu-audit",
  templateUrl: "./audittrail.component.html",
  styleUrls: ["./audittrail.component.scss"]
})
export class AudittrailComponent {
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
    columns: {}
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private route: ActivatedRoute,
    private service: SmartTableData,
    private featureService: FeatureTableData
  ) {
    let data = []; //this.service.getData();
    this.source.load(data);
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.moduleName = params.type;
    });
  }
  /*
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
  */
  fetchEntityData(selectedValue) {
    if (selectedValue == "users") {
      let data = this.service.getData();
      if (data && data.length > 0) {
        this.buildTableColumns(data);
      }
      // this.source.load(data);
    } else {
      let data = this.featureService.getData();
      if (data && data.length > 0) {
        this.buildTableColumns(data);
      }
      //console.log("data=", data);
      //this.source.load(data);
    }
    //console.log("Function Called=", event);
  }

  buildTableColumns(data) {
    let col = data[0];
    let tmpCol = {};
    console.log("value=", data);
    col.forEach(val => {
      console.log("value=", val);
    });
    this.settings.columns = {};
  }
  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
