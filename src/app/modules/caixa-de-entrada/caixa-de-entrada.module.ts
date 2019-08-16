import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CaixaDeEntradaComponent } from './caixa-de-entrada.component';
import { FormsModule } from '@angular/forms';
import { SharedComponentsModule } from "../../components/shared-components.module"; 
import { CaixaDeEntradaRoutingModule } from './caixa-de-entrada-routing.module';
import { EmailServiceService } from 'src/app/services/email-service.service';
import { HttpClientModule } from '@angular/common/http';
import { CmailListItemComponent } from './cmail-list-item/cmail-list-item.component';
import { EmailImportantPipe } from './cmail-list-item/email-important.pipe';


@NgModule({ 
  declarations: [
    CaixaDeEntradaComponent,
    CmailListItemComponent,
    EmailImportantPipe
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedComponentsModule,
    CaixaDeEntradaRoutingModule,
    HttpClientModule
  ],
  exports: [
    CaixaDeEntradaComponent,
    CmailListItemComponent
  ],
  providers: [
    EmailServiceService
  ]
})
export class CaixaDeEntradaModule { }
