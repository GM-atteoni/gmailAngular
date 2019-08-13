import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginModule } from './modules/login/login.module';
import { CaixaDeEntradaModule } from './modules/caixa-de-entrada/caixa-de-entrada.module';
import { CadastroModule } from './modules/cadastro/cadastro.module';
import { ModuloRoteamento } from './app.routes';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    LoginModule,
    CaixaDeEntradaModule,
    CadastroModule,
    ModuloRoteamento
  ],
  providers: [
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
