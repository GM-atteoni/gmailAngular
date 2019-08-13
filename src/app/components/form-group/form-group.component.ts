import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styles: []
})
export class FormGroupComponent implements OnInit {

  @Input() label = '';
  @Input() idCampo = '';

  constructor() { }

  ngOnInit() {
  }

}
