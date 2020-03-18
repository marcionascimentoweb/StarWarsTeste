import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  public fundo: string ='./assets/espaco.jpg';
  public personagem1: string ='./assets/personagem1.png';
  public personagem2: string ='./assets/personagem2.png';
  public personagem3: string = './assets/personagem3.png' ;


  constructor(private routerNav: Router) { }

  ngOnInit() {
    
  }

  iniciar() {
    this.routerNav.navigate(['../alderaan']);
  }

}
