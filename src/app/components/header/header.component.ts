import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'cmail-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css',
              './header-search.css']
})
export class HeaderComponent implements OnInit {

  constructor() { } 

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

  ngOnInit() {
    this.loggedUser.name = localStorage.getItem('NOME');
    this.loggedUser.avatar = localStorage.getItem('AVATAR');
    this.loggedUser.email = localStorage.getItem('EMAIL');
  }

  exibeMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

}
