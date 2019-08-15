import { Injectable } from '@angular/core';
import { environment } from "src/environments/environment";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  url = environment.api;

  autenticar(login: LoginInputDTO): Observable<LoginOutputDTO> {
    return this.http.post<LoginOutputDTO>(`${this.url}login`, login)
    .pipe(
      map((res) => {
        localStorage.setItem('TOKEN', res.token);
        localStorage.setItem('AVATAR', res.avatarUrl);
        localStorage.setItem('NOME', res.name);
        localStorage.setItem('EMAIL', res.email);
        return res;
      })
    );
  }
  

}
