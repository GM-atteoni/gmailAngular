import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

const rotasApp: Routes = [
    {
        path:'', 
        loadChildren: () => import('./modules/caixa-de-entrada/caixa-de-entrada.module').then(m => m.CaixaDeEntradaModule)
    },
    {
        path: 'cadastro', 
        loadChildren: () => import('./modules/cadastro/cadastro.module').then(m => m.CadastroModule)
    },
    {
        path: 'login', 
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
    },
    {
        path: 'login/:username',
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule)
    },
    {
        path: '**', redirectTo: ''
    }
];

//export const ModuloRoteamento = RouterModule.forRoot(rotasApp);

@NgModule({
    imports:[
        RouterModule.forRoot(rotasApp)
    ],
    exports:[
        RouterModule
    ]
})
export class AppRoutingModule { }