import { CanActivate, Router } from '@angular/router';

export class AuthGuard implements CanActivate{

    constructor(private route: Router) {}

    canActivate(){
        if(localStorage.getItem('TOKEN')){
            console.log('ok')
            return true;
        }else{
            console.log('nok')
            this.route.navigate(['login']);
            return false; 
        }
    }

}