import { Directive, ElementRef } from '@angular/core';

@Directive({ 
    selector: '[cmailFormField]'
})
export class formFieldDirective {

    constructor(elemento:ElementRef){ 

        const campo:HTMLInputElement = elemento.nativeElement;

        campo.classList.add('mdl-textfield__input');
        campo.placeholder = " ";

        if(campo.name.trim()){
            campo.id = campo.name;
        }else{
            throw new Error('O atributo name deve ser atribuido.');
        }

    }

}