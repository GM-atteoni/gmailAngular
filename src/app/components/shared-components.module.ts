import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from '@angular/router';
import { FormGroupComponent } from './form-group/form-group.component';
import { formFieldDirective } from './form-group/form-group.directive';


@NgModule({
  declarations: [
    HeaderComponent,
    FormGroupComponent,
    formFieldDirective
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FormGroupComponent,
    formFieldDirective
  ]
})
export class SharedComponentsModule { }
