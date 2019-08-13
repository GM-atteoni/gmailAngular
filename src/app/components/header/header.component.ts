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

  ngOnInit() {
  }

  exibeMenu(){
    this.isMenuOpen = !this.isMenuOpen;
  }

}
