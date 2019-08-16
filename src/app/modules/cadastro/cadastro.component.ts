import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UserInputDTO } from 'src/app/models/user-input';
import { HttpClient, HttpErrorResponse, HttpResponseBase } from '@angular/common/http';
import { Router } from '@angular/router';
import { map, catchError } from "rxjs/operators";
import { CadastroService } from 'src/app/services/cadastro.service';
import { LoginService } from 'src/app/services/login.service';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  nome = new FormControl('', [Validators.required, Validators.minLength(2), Validators.pattern(/^\D*$/)]);
  user = new FormControl('', [Validators.required, Validators.minLength(2), Validators.maxLength(12)]);
  telefone = new FormControl('+55', [Validators.required, Validators.minLength(12), Validators.maxLength(12)]);
  senha = new FormControl('', Validators.required);
  avatar = new FormControl('', Validators.required, this.validaImagem.bind(this));

  formCadastro = new FormGroup({
    nome: this.nome,
    user: this.user,
    telefone: this.telefone,
    senha: this.senha,
    avatar: this.avatar,
  });

  erroMessage: string = '';

  constructor(private httpClient: HttpClient,
              private router:Router,
              private cadastroService:CadastroService,
              private loginService: LoginService,
              private pageDataService: PageDataService) { } 

  ngOnInit() {
      this.pageDataService.atualizaTitulo('Cadastro');
  }

  //a ideia é fazer uma funçao que pega a url digitada pelo usuário e verifica se ao bater nela, vem sem erro (ou seja, 200). 

  validaImagem(campo: FormControl){
    //o hhtp.head() é como se fosse um get() que apenas foca no head da response.
    return this.httpClient.head(campo.value, {observe: 'response'})
      .pipe(
                  map(
                    (response: HttpResponseBase) => {
                    if(response.status == 200){
                      return null;
                    }else{
                      return [{urlInvalida: true}]
                    }
                  }
                  )
                  
                  ,catchError((error: HttpErrorResponse) => {
                    return [{urlInvalida: true}]
                  })
      )
      
  }
  
  enviaCadastro(){

    const dadosForm = this.formCadastro.value;

    const novoUsuario = new UserInputDTO(dadosForm);

    if(this.formCadastro.valid){
        this.cadastroService.cadastrar(novoUsuario).subscribe(
          (res) => {
            this.erroMessage = '';
            this.formCadastro.reset();

            var logUser:LoginInputDTO = {
              email: novoUsuario.username,
              password: novoUsuario.password,
            }

            this.loginService.autenticar(logUser).subscribe(
              (resp: any) => {
              this.router.navigate(['/caixa']);
            }
            ,(err) => {
              this.router.navigate(['/login']);
            }
            )

        }, (err: HttpErrorResponse) => {
          this.erroMessage = err.error.body[0].message;
        }
      )
    }else{
      this.formCadastro.markAllAsTouched();
    }
  }

}
