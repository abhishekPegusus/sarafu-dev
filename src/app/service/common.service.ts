import { Injectable } from "@angular/core";
import {
  NbComponentStatus,
  NbGlobalPhysicalPosition,
  NbToastrService
} from "@nebular/theme";

@Injectable({
  providedIn: "root"
})
export class CommonService {
  constructor(public toastrService: NbToastrService, ) { }

  statusSuccess: NbComponentStatus = "success";
  statusDanger: NbComponentStatus = "danger";
  config = {
    status: this.statusDanger,
    destroyByClick: true,
    duration: 5000,
    hasIcon: true,
    position: NbGlobalPhysicalPosition.TOP_RIGHT,
    preventDuplicates: true
  };

  types: NbComponentStatus[] = [
    "primary",
    "success",
    "info",
    "warning",
    "danger"
  ];


  showToast(heading: string, body: string, status: NbComponentStatus) {
    this.config.status = status;
    this.toastrService.show(
      body,
      heading,
      this.config
    );
  }
}
