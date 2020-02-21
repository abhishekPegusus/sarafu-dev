import { Injectable } from '@angular/core';
import { Clients } from '../../models/sarafu/clients';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { API } from '../../../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  constructor(private http: HttpClient) { }
  findById(id: string): Observable<Clients> {
    let url = API.BASE_URL + "/users/" + id;
    let headers = new HttpHeaders().set("Accept", "application/json");
    return this.http.get<Clients>(url, { headers });
  }
  getData(pageNumber?, size?, filter?): Observable<Clients[]> {
    let url = API.BASE_URL + "/users";
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
      return this.http.get<Clients[]>(url, { params, headers });
    }
    return this.http.get<Clients[]>(url, { headers });
  }

  save(entity: Clients): Observable<Clients> {
    console.log('Form Val=', entity);
    console.log('Type check=', typeof entity);
    console.log('Next Type check=', typeof entity.appID);
    let url = API.BASE_URL + "/users";
    let headers = new HttpHeaders().set("Accept", "application/json");
    // const formValues = { email: entity.username, password: entity.password };
    console.log('FRM=', entity);
    return this.http.post<Clients>(url, entity, { headers });
  }

  update(entity: Clients, ID: any): Observable<Clients> {
    let url = API.BASE_URL + `/users/${ID}`;
    let headers = new HttpHeaders().set("Accept", "application/json");

    return this.http.patch<Clients>(url, entity, { headers });
  }

  delete(id: string): Observable<Clients> {
    let url = API.BASE_URL + `/users/${id}/`;
    let headers = new HttpHeaders().set("Accept", "application/json");
    return this.http.delete<Clients>(url, { headers });
  }

}
