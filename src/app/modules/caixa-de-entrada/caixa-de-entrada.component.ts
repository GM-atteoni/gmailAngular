import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailServiceService } from 'src/app/services/email-service.service';
import { EmailOutPutsDTO } from 'src/app/models/emailOutPutDTO';

@Component({ 
  selector: 'app-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})
export class CaixaDeEntradaComponent implements OnInit {

  constructor(private emailService: EmailServiceService) { }

  ngOnInit() {
    this.emailService.listar().subscribe((res) => {
      this.listEmails = res;
    })
  }
 
  private _isEmailFormOpen = false;

  listEmails:EmailOutPutsDTO[];

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

    this.emailService.enviarEmail(novoEmail).subscribe((res) => {
      console.log('ok')
    },
    (err) => {
      console.log('nok')
    })

    formEmail.resetForm();

  }

  removeEmail(){
    console.log('pai ok')
  }

}
