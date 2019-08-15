import { CanActivate, Router } from '@angular/router';
import { Injectable } from '@angular/core';

@Injectable()
export class LogoutGuard implements CanActivate{

    constructor() {}

    canActivate(){
        if(localStorage.getItem('AVATAR')){
        localStorage.removeItem('NOME');
        localStorage.removeItem('AVATAR');
        localStorage.removeItem('EMAIL');
        localStorage.removeItem('TOKEN');
        }
        
        return true;
    }

}