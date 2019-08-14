import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private http: HttpClient,
              private route: Router) { }

  username: string = '';
  senha: string = ''; 

  mensagemErro: string = null;

  ngOnInit() {
  }

  login(form: NgForm){

    if(form.valid){
      this.http.post('http://localhost:3200/login', {
        email: this.username,
        password: this.senha
      })
      .subscribe(
        (resp: any) => {
        localStorage.removeItem("TOKEN");
        localStorage.setItem("TOKEN", resp.token);
      }
      ,(err) => {
        this.mensagemErro = err.error.message;
      }
      );

    }else{
      form.controls['senha'].markAsTouched();
      form.controls['email'].markAsTouched();
    }
  }
}
