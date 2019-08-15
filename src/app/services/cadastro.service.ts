import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CadastroService {

  constructor(private http: HttpClient) { }

  cadastrar(novoUsuario){
    return this.http.post("http://localhost:3200/users", novoUsuario);
  }

}
