import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
 
@Component({
  selector: 'app-cmail-list-item',
  templateUrl: './cmail-list-item.component.html',
  styles: ['./cmail-list-item.component.css']
})
export class CmailListItemComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() destinatario = '';
  @Input() assunto = '';
  @Input() introducaoDoConteudo = '';
  @Input() dataDeEnvio = '';
  @Output() eventoRemoveEmail = new EventEmitter();

  clickBotaoRemover(){
    if(confirm('Tem certeza?')){
      this.eventoRemoveEmail.emit();
    }
  }

}
