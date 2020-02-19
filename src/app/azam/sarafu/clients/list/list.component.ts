import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalDataSource } from "ng2-smart-table";
import { SmartTableData } from "../../../../@core/data/smart-table";
import { ClientsService } from '../../../services/sarafu/clients.service';


@Component({
  selector: "ngx-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {
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
      ID: {
        title: "ID",
        type: "number"
      },
      name: {
        title: "Name",
        type: "string"
      },
      email: {
        title: "Email",
        type: "string"
      },
      mobileNumber: {
        title: "Mobile",
        type: "string"
      },
      appID: {
        title: "App",
        type: "string"
      },
      roleID: {
        title: "Role",
        type: "string"
      }
    }
  };

  source: LocalDataSource = new LocalDataSource();

  constructor(private route: ActivatedRoute,
    // private service: SmartTableData,
    private service: ClientsService
  ) {

    // const data = this.service.getData();
    // debugger;
    //  this.source.load(data);
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.moduleName = params.type;
    });

    // Get Data
    this.service.getData().subscribe(
      (response: any) => {
        console.log('Res=', response);
        this.source.load(response);
        if (response.status === 200) {
          // this.subCategories = response.data;
        }
      },
      error => { console.error('Error in get Data=', error); }
    );
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }
}
