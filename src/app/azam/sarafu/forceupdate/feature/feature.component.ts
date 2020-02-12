import { Component } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { LocalDataSource } from "ng2-smart-table";

import { FeatureTableData } from "../../../../@core/data/feature-table";

import { Pipe, PipeTransform } from "@angular/core";
import { DomSanitizer, SafeHtml } from "@angular/platform-browser";

@Pipe({ name: "noSanitize" })
// export class NoSanitizePipe implements PipeTransform {
//   constructor(private domSanitizer: DomSanitizer) {}
//   transform(html: string): SafeHtml {
//     return this.domSanitizer.bypassSecurityTrustHtml(html);
//   }
// }

@Component({
  selector: "ngx-smart-table",
  templateUrl: "./feature.component.html",
  styleUrls: ["./feature.component.scss"]
})
export class FeatureComponent implements PipeTransform {
  moduleName = "";
  settings = {
    columns: {
      //or something

      id: {
        title: "Action Name",
        type: "string"
      },
      firstName: {
        title: "Description",
        type: "string"
      },
      lastName: {
        title: "Last Name",
        type: "string"
      },
      //or something
      Actions: {
        title: "Status",
        type: "html",
        valuePrepareFunction: (cell, row) => {
          return `<ui-switch checked></ui-switch>`;
        },
        filter: false
      },
      email: {
        title: "Min.App Version",
        type: "string"
      }
    },
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
    }
  };

  transform(html: any): SafeHtml {
    return this.domSanitizer.bypassSecurityTrustHtml(html);
  }

  source: LocalDataSource = new LocalDataSource();

  constructor(
    private route: ActivatedRoute,
    private service: FeatureTableData,
    private domSanitizer: DomSanitizer
  ) {
    const data = this.service.getData();
    this.source.load(data);
  }

  ngOnInit() {
    this.route.params.subscribe((params: any) => {
      this.moduleName = params.type;
      console.log("Data=", params.type);
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
