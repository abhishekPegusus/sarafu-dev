import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalDataSource } from "ng2-smart-table";
import { ClientsService } from '../../../services/sarafu/clients.service';


@Component({
  selector: "ngx-list",
  templateUrl: "./list.component.html",
  styleUrls: ["./list.component.scss"]
})
export class ListComponent implements OnInit {

  constructor(private route: ActivatedRoute, private router: Router, private service: ClientsService) { }


  moduleName = "";
  settings = {
    actions: {
      add: false,
      edit: false,
      delete: false,
      class: "action-column",
      custom: [
        {
          title: '<i class="nb-edit"></i>',
          name: 'Edit'
        }
      ],
      position: 'right',
    },
    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      createButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>'
    },
    edit: {
      editButtonContent: '<i class="nb-edit"></i>',
      saveButtonContent: '<i class="nb-checkmark"></i>',
      cancelButtonContent: '<i class="nb-close"></i>',
      confirmEdit: true
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


  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.moduleName = params.type;
    });

    // Get Data
    this.service.getData().subscribe(
      (response: any) => {
        const data = response.map(value => {
          value.appID = "Sarafu";
          value.roleID = "Admin";
          return value;
        });
        this.source.load(data);
        if (response.status === 200) {

        }
      },
      error => { console.error('Error in get Data=', error); }
    );
  }

  onCustomAction(event) {
    this.router.navigate([`azam/sarafu/clients/edit/${event.data.ID}`]);
  }
  onDeleteConfirm(event): void {
    this.service.delete(event.data.ID).subscribe(
      (response: any) => {
        this.source.load(response);
        if (response.status === 200) {

        }
      },
      error => { console.error('Error in delete Data=', error); }
    );
    // if (window.confirm("Are you sure you want to delete?")) {
    //   event.confirm.resolve();
    // } else {
    //   event.confirm.reject();
    // }
  }
}
