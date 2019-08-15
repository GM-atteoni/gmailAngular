import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService,
              private route: Router) { }

  username: string = '';
  senha: string = ''; 

  mensagemErro: string = null;

  ngOnInit() {
    
  }

  login(form: NgForm){

    var loginInput: LoginInputDTO = {
      email: this.username, 
      password: this.senha
    };

    if(form.valid){
      this.loginService.autenticar(loginInput)
      .subscribe(
        (resp: any) => {
        this.route.navigate(['/caixa']);
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
