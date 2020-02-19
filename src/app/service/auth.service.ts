import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { API } from "../../environments/environment";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  constructor(private http: HttpClient) { }

  login(entity: any): Observable<any> {
    let url = API.BASE_URL + "/users/login";
    let headers = new HttpHeaders().set("Accept", "application/json;");
    const formValues = { email: entity.username, password: entity.password, appID: 1 };
    return this.http.post<any>(url, formValues, {
      headers
    });
  }
}
