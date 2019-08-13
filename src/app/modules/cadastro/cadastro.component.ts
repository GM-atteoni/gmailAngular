import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styles: []
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    email: new FormControl,
    nome: new FormControl,
    senha: new FormControl,
    avatar: new FormControl
  })

  constructor() { }

  ngOnInit() {
  }
  
  enviaCadastro(){
    console.log(this.formCadastro.value)
  }

}
