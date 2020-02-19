import { Injectable } from '@angular/core';
import { Clients } from '../../models/sarafu/clients';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class AppinfoService {

  constructor(private http: HttpClient) { }
  getApp(pageNumber?, size?, filter?): Observable<any[]> {
    let url = API.BASE_URL + "/app-info";
    let headers = new HttpHeaders().set("Accept", "application/json");
    let params: any = {};

    if (pageNumber) {
      params.pageNumber = pageNumber;
    }


    if (size) {
      params.size = size;
    }
    if (filter) {
      params.filter = filter;
    }

    if (params) {
      return this.http.get<any[]>(url, { params, headers });
    }
    return this.http.get<any[]>(url, { headers });
  }

}
