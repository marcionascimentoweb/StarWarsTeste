import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BespinService } from './bespin.service';
import { Planeta } from '../Planetas';

@Component({
  selector: 'app-bespin',
  templateUrl: './bespin.component.html',
  styleUrls: ['./bespin.component.css']
})
export class BespinComponent implements OnInit {

  varPlaneta: any;
  erro: any;

  public fundo = './assets/espaco.jpg';
  public planetaImg = './assets/bespin/bespinPlaneta.png';
  public personagembespin = './assets/bespin/bespinPersonagem.png';
  

  constructor(
    private routerNav: Router,
    private bespinSerive: BespinService) {
      this.Obterplanetas();
    } 

  ngOnInit() {
  }

  Obterplanetas() {
    this.bespinSerive.getPlanetas().subscribe( 
      (data : Planeta) => {
        this.varPlaneta = data;
      },
      (error: any)=> {
        this.erro = error;
        console.error('ERROR: ', error);
      });
  }

  next() {
    this.routerNav.navigate(['./endor']);
  }

  telaInicial(){
    this.routerNav.navigate(['../']);
  }

}