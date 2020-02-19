import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormBuilder,
  FormGroup
} from "@angular/forms";
import { RouterModule, Router } from "@angular/router";
import {
  NbComponentStatus,
  NbGlobalPhysicalPosition,
  NbToastrService
} from "@nebular/theme";
import { ClientsService } from '../../../services/sarafu/clients.service';
import { Clients } from '../../../models/sarafu/clients';
import { RolesService } from '../../../services/sarafu/roles.service';
import { CountryService } from '../../../services/sarafu/country.service';
import { AppinfoService } from '../../../services/sarafu/appinfo.service';
import { CommonService } from '../../../../service/common.service';



@Component({
  selector: 'ngx-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  public clientsForm: FormGroup;
  clientsModel: Clients;
  submitted = false;
  statusSuccess: NbComponentStatus = "success";
  statusDanger: NbComponentStatus = "danger";
  countries: any[] = [];
  roles: any[] = [];
  apps: any[] = [];
  constructor(public ClientsService: ClientsService,
    private router: Router,
    public RoleService: RolesService,
    public CountryService: CountryService,
    public AppinfoService: AppinfoService,
    public CommonService: CommonService
  ) { }

  ngOnInit() {
    this.getApps();
    this.getCountry();
    this.getRoles();
    this.clientsForm = new FormGroup({
      name: new FormControl("", [Validators.required]),
      gender: new FormControl("", [Validators.required]),
      email: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
      mobileNumber: new FormControl("", [Validators.required]),
      dateOfBirth: new FormControl("", [Validators.required]),
      countryID: new FormControl("", [Validators.required]),
      appID: new FormControl("", [Validators.required]),
      roleID: new FormControl("", [Validators.required]),
      allowNotification: new FormControl("", [Validators.required]),
      singleTransactionLimit: new FormControl(),
      dailyTransactionLimit: new FormControl(),
      promoCode: new FormControl(),
      profolioCode: new FormControl(),
      analysisCode01: new FormControl(),
      analysisCode02: new FormControl(),
      analysisCode03: new FormControl(),
      password: new FormControl("", [Validators.required]),
      confirmPassword: new FormControl("", [Validators.required])
    }, {
      validators: this.password.bind(this)
    });
  }
  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmPassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
  onSubmit() {
    this.submitted = true;
    // if (this.clientsModel) {
    //   Object.assign(this.clientsModel, this.clientsForm.value);
    //   this.ClientsService.update(this.clientsModel).subscribe(
    //     (response: any) => {
    //       if (response.status === 200) { }
    //       else { console.log(response); }
    //     },
    //     error => console.error(error)
    //   );
    // } else {
    // Object.assign(this.clientsModel, this.clientsForm.value);
    if (this.clientsForm.valid) {
      this.clientsForm.value.appID = parseInt(this.clientsForm.value.appID, 10);
      this.clientsForm.value.countryID = parseInt(this.clientsForm.value.countryID, 10);
      this.clientsForm.value.roleID = parseInt(this.clientsForm.value.roleID, 10);
      this.clientsForm.value.allowNotification = this.clientsForm.value.allowNotification == "true" ? true : false;
      this.ClientsService
        .save(this.checkIfValueIsEmpty(this.clientsForm.value))
        .subscribe(
          (response: any) => {
            if (response.status == "SUCCESSFUL") {
              this.CommonService.showToast(response.status, response.message, 'success');
              this.router.navigate(["azam/sarafu/clients"]);
            }
            else {
              console.log(response);
              this.CommonService.showToast(response.status, `${response.message}, ${response.data}`, 'danger');
            }

          },
          error => { console.error('catch error=', error); this.CommonService.showToast('Data Not saved', error.message, 'danger'); }
        );
    } else { console.log(this.clientsForm); this.CommonService.showToast('Invalid Inputs', 'Please fill valid data in manadatory fields.', 'danger'); }
    //}
  }
  getCountry() {
    this.CountryService.getCountries().subscribe(
      (response: any) => {
        //console.log('Countries=', response);
        this.countries = response;
        if (response.status === 200) {
          // this.subCategories = response.data;
        }
      },
      error => { console.error('Error in get Data=', error); }
    );
  }

  getApps() {
    this.AppinfoService.getApp().subscribe(
      (response: any) => {
        //console.log('Apps=', response);
        this.apps = response;
        if (response.status === 200) {
          // this.subCategories = response.data;
        }
      },
      error => { console.error('Error in get Data=', error); }
    );
  }
  getRoles() {
    this.RoleService.getRoles().subscribe(
      (response: any) => {
        // console.log('Roles=', response);
        this.roles = response;
        if (response.status === 200) {
          // this.subCategories = response.data;
        }
      },
      error => { console.error('Error in get Data=', error); }
    );
  }

  checkIfValueIsEmpty(data) {
    for (let key in data) {
      if (data[key] === "" || data[key] === null) {
        delete data[key];
      }
    }
    return data;
  }

}
