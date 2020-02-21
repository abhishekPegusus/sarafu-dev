import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  Validators,
  FormGroup
} from "@angular/forms";
import { Router, ActivatedRoute } from "@angular/router";
import {
  NbComponentStatus,
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

  constructor(
    public ClientsService: ClientsService,
    private router: Router,
    private activatedRoute: ActivatedRoute,
    public RoleService: RolesService,
    public CountryService: CountryService,
    public AppinfoService: AppinfoService,
    public CommonService: CommonService
  ) { }


  clientsModel: Clients;
  submitted = false;
  statusSuccess: NbComponentStatus = "success";
  statusDanger: NbComponentStatus = "danger";
  countries: any[] = [];
  roles: any[] = [];
  apps: any[] = [];
  editMode = false;
  editParamID = 0;
  clientsForm: FormGroup = new FormGroup({
    name: new FormControl("", [Validators.required]),
    gender: new FormControl("", [Validators.required]),
    email: new FormControl("", [Validators.required, Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$")]),
    mobileNumber: new FormControl("", [Validators.required]),
    dateOfBirth: new FormControl("", [Validators.required]),
    countryID: new FormControl("", [Validators.required]),
    appID: new FormControl("", [Validators.required]),
    roleID: new FormControl("", [Validators.required]),
    allowNotification: new FormControl("", [Validators.required]),
    status: new FormControl(),
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

  ngOnInit() {
    this.getApps();
    this.getCountry();
    this.getRoles();

    this.activatedRoute.params.subscribe(params => {
      if (params.id > 0) {
        this.editMode = true;
        this.editParamID = params.id;
        const pwd = this.clientsForm.get('password');
        const conPwd = this.clientsForm.get('confirmPassword');
        pwd.setValidators(null);
        conPwd.setValidators(null);
        this.ClientsService.findById(params.id).subscribe(
          (response: any) => {
            if (response) {
              this.clientsModel = response;
              this.clientsForm.setValue({
                name: this.clientsModel.name ? this.clientsModel.name : "",
                gender: this.clientsModel.gender ? this.clientsModel.gender : "",
                appID: this.clientsModel.appID ? this.clientsModel.appID : 1,
                email: this.clientsModel.email ? this.clientsModel.email : "",
                mobileNumber: this.clientsModel.mobileNumber ? this.clientsModel.mobileNumber : "",
                roleID: this.clientsModel.roleID ? this.clientsModel.roleID : 1,
                status: this.clientsModel.status == "1" ? true : false,
                singleTransactionLimit: this.clientsModel.singleTransactionLimit ? this.clientsModel.singleTransactionLimit : "",
                dailyTransactionLimit: this.clientsModel.dailyTransactionLimit ? this.clientsModel.dailyTransactionLimit : "",
                promoCode: this.clientsModel.promoCode ? this.clientsModel.promoCode : "",
                profolioCode: this.clientsModel.profolioCode ? this.clientsModel.profolioCode : "",
                analysisCode01: this.clientsModel.analysisCode01 ? this.clientsModel.analysisCode01 : "",
                analysisCode02: this.clientsModel.analysisCode02 ? this.clientsModel.analysisCode02 : "",
                analysisCode03: this.clientsModel.analysisCode03 ? this.clientsModel.analysisCode03 : "",
                password: this.clientsModel.password ? this.clientsModel.password : "",
                confirmPassword: this.clientsModel.confirmPassword ? this.clientsModel.confirmPassword : "",
                //  isSocialAuth: this.clientsModel.isSocialAuth ? this.clientsModel.isSocialAuth : "",
                countryID: this.clientsModel.countryID ? this.clientsModel.countryID : 90,
                allowNotification: this.clientsModel.allowNotification == 1 ? "yes" : "no",
                dateOfBirth: this.clientsModel.dateOfBirth ? this.clientsModel.dateOfBirth : "",
              });
            }
          });
      }
    });

  }
  password(formGroup: FormGroup) {
    const { value: password } = formGroup.get('password');
    const { value: confirmPassword } = formGroup.get('confirmPassword');
    return password === confirmPassword ? null : { passwordNotMatch: true };
  }
  onSubmit() {
    this.submitted = true;
    if (this.clientsForm.valid) {
      this.clientsForm.value.appID = parseInt(this.clientsForm.value.appID, 10);
      this.clientsForm.value.countryID = parseInt(this.clientsForm.value.countryID, 10);
      this.clientsForm.value.roleID = parseInt(this.clientsForm.value.roleID, 10);
      this.clientsForm.value.allowNotification = this.clientsForm.value.allowNotification == "true" ? true : false;
      this.clientsForm.value.status = this.clientsForm.value.status == true ? "1" : "0";

      if (this.clientsModel) {
        //Object.assign(this.clientsModel, this.clientsForm.value);
        this.ClientsService.update(this.checkIfValueIsEmpty(this.clientsForm.value), this.editParamID).subscribe(
          (response: any) => {
            if (response && response.status == "SUCCESSFUL") {
              this.CommonService.showToast(response.status, response.message, 'success');
              this.router.navigate(["azam/sarafu/clients"]);
            }
            else {
              this.CommonService.showToast("Suucessfull", 'Record Updated', 'success');
              this.router.navigate(["azam/sarafu/clients"]);
            }
          },
          error => {
            console.error('Update catch error=', error);
            this.CommonService.showToast('Data Not Updated', error.message, 'danger');
          }
        );
      } else {
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
      }
    } else {
      console.log(this.clientsForm);
      this.CommonService.showToast('Invalid Inputs', 'Please fill valid data in manadatory fields.', 'danger');
    }
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
