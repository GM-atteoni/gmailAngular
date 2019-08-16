import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailServiceService } from 'src/app/services/email-service.service';
import { EmailOutPutsDTO } from 'src/app/models/emailOutPutDTO';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({ 
  selector: 'app-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})
export class CaixaDeEntradaComponent implements OnInit {

  constructor(private emailService: EmailServiceService,
              private pageDataServico: PageDataService) { }

  ngOnInit() {
   this.listarEmails();

   this.pageDataServico.atualizaTitulo('Caixa de Entrada');
  }

  
  private _isEmailFormOpen = false;
  
  listEmails:EmailOutPutsDTO[] = [];
  
  email = {
    destinatario: '',
    assunto: '',
    conteudo: ''
  }
  
  listarEmails(){
    this.emailService.listar().subscribe((res) => {
      this.listEmails = res;
    })
  }

  textoDigitadoFilter: string = '';
  
  listaFiltrada(){
    return this.listEmails.filter((email) => {
      return email.assunto.includes(this.textoDigitadoFilter) || email.conteudo.includes(this.textoDigitadoFilter) || email.destinatario.includes(this.textoDigitadoFilter);
    })
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
      this.listarEmails();
    },
    (err) => {
      console.log(err)
    })

    formEmail.resetForm();

  }

  removeEmail(id){

    this.emailService.deletar(id).subscribe((res) => {
      this.listarEmails();
    },(err) => {
      alert('Erro ao deletar email');
    })
  }

}
