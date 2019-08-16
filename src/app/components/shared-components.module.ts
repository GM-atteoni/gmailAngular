import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { RouterModule } from '@angular/router';
import { FormGroupComponent } from './form-group/form-group.component';
import { formFieldDirective } from './form-group/form-group.directive';
import { PageDataService } from '../services/page-data.service';


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
  ], providers: [
    PageDataService
  ]
})
export class SharedComponentsModule { }
