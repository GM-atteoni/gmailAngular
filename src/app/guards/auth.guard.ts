import { CanActivate, Router } from '@angular/router';

export class AuthGuard implements CanActivate{

    constructor(private route: Router) {}

    canActivate(){
        if(localStorage.getItem('TOKEN')){
            return true;
        }else{
            console.log('nok')
            this.route.navigate(['login']);
            return false; 
        }
    }

}