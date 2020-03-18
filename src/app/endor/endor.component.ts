import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EndorService } from './endor.service';
import { Planeta } from '../Planetas';

@Component({
  selector: 'app-endor',
  templateUrl: './endor.component.html',
  styleUrls: ['./endor.component.css']
})
export class EndorComponent implements OnInit {

  varPlaneta: any;
  erro: any;

  public fundo = './assets/espaco.jpg';
  public planetaImg = './assets/endor/endorPlaneta.png';
  public personagemendor = './assets/endor/endorPersonagem.png';

  constructor(
    private routerNav: Router,
    private endorService: EndorService) {
      this.Obterplanetas();
  }

  ngOnInit() {
  }

  Obterplanetas() {
    this.endorService.getPlanetas().subscribe( 
      (data : Planeta) => {
        this.varPlaneta = data;
      },
      (error: any)=> {
        this.erro = error;
        console.error('ERROR: ', error);
      });
  }

  next() {
    this.routerNav.navigate(['./naboo']);
  }

  telaInicial(){
    this.routerNav.navigate(['../']);
  }
    
  }