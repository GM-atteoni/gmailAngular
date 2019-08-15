import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { EmailDTO } from '../models/emailDTO';

@Injectable({
  providedIn: 'root'
})
export class EmailServiceService {
  readonly url = environment.api+'emails';
  readonly headers = {
    headers: new HttpHeaders({'Authorization': localStorage.getItem('TOKEN')})
  }

  constructor(private http: HttpClient) { }


  enviarEmail(email){
    const emailDTO: EmailDTO = new EmailDTO(email);

    return this.http.post(this.url, emailDTO, this.headers);

  }

}
