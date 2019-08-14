import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styles: []
})
export class FormGroupComponent implements OnInit {

  @Input() label = '';
  @Input() idCampo = '';
  @Input() validacao = false;
  @Input() validacaoTipo2 = {
    touched: false,
    invalid: false,
    dirty: false
  };

  constructor() { }

  ngOnInit() {
  }

}
