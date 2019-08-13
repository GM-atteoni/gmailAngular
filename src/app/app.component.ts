import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  
  private _isEmailFormOpen = false;

  listEmails = [];

  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }

  get isEmailFormOpen(){
    return this._isEmailFormOpen;
  }

  toggleEmailForm(){
    this._isEmailFormOpen = !this.isEmailFormOpen;
  }
  
  enviaEmail(formEmail: NgForm){

    if(formEmail.invalid){
      if(formEmail.controls['para'].invalid){
        formEmail.controls['para'].markAsTouched();
      }
      if(formEmail.controls['assunto'].invalid){
        formEmail.controls['assunto'].markAsTouched();
      }
      return;
    }

    const novoEmail = {
      destinatario: this.email.destinatario,
      assunto: this.email.assunto,
      conteudo: this.email.conteudo
    }
    this.listEmails.push(novoEmail);

    formEmail.resetForm();

  }

}
