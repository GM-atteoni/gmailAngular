import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class PageDataService {

  readonly titulo = new Subject<string>();

  constructor() { }

  atualizaTitulo(novoTitulo: string){
    document.title = novoTitulo + ' - CMail';
    this.titulo.next(novoTitulo);
  }

}
