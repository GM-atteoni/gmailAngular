import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';
import { LogoutGuard } from './guards/logout.guard';

const rotasApp: Routes = [
    {
        path:'',
        canActivate: [LogoutGuard],
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
        pathMatch: 'full',
    },
    {
        path: 'cadastro', 
        loadChildren: () => import('./modules/cadastro/cadastro.module').then(m => m.CadastroModule)
    },
    {
        path: 'caixa',
        loadChildren: () => import('./modules/caixa-de-entrada/caixa-de-entrada.module').then(m => m.CaixaDeEntradaModule),
        canActivate: [AuthGuard]
    },
    {
        path: 'logout',
        canActivate: [LogoutGuard],
        loadChildren: () => import('./modules/login/login.module').then(m => m.LoginModule),
        
    },
    {
        path: '**', redirectTo: '', pathMatch: 'full'
    }
];

//export const ModuloRoteamento = RouterModule.forRoot(rotasApp);

@NgModule({
    imports:[
        RouterModule.forRoot(rotasApp)
    ],
    exports:[
        RouterModule
    ],
    providers: [
        AuthGuard,
        LogoutGuard
    ]
})
export class AppRoutingModule { }