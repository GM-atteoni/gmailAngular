import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'cmail-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',
              './header-search.css']
})
export class HeaderComponent implements OnInit {

  constructor(private pageDataService: PageDataService) { 
    this.pageDataService.titulo.subscribe(
      (novoTitulo) => {
        this.tituloHeader = novoTitulo;
      }
    );
  } 

  isMenuOpen = false;

  loggedUser: {
    name: string, 
    avatar: string,
    email: string
  } = {
    name: '',
    avatar: '',
    email: ''
  }
  
  tituloHeader = '';

  @Output() enviaFiltro = new EventEmitter<string>();

  ngOnInit() {
    this.loggedUser.name = localStorage.getItem('NOME');
    this.loggedUser.avatar = localStorage.getItem('AVATAR');
    this.loggedUser.email = localStorage.getItem('EMAIL');
  }

  exibeMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

  handleBusca(inputValue){
    this.enviaFiltro.emit(inputValue);
  }

}
