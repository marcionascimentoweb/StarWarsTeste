import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NabooService } from './naboo.service';
import { Planeta } from '../Planetas';

@Component({
  selector: 'app-naboo',
  templateUrl: './naboo.component.html',
  styleUrls: ['./naboo.component.css']
})
export class NabooComponent implements OnInit {

  varPlaneta: any;
  erro: any;

  public fundo = './assets/espaco.jpg';
  public planetaImg = './assets/naboo/nabooPlaneta.png';
  public personagemnaboo = './assets/naboo/nabooPersonagem.png';

  constructor(
    private routerNav: Router,
  private nabooService: NabooService)    
  { this.Obterplanetas() }

  ngOnInit() {
  }

  Obterplanetas() {
    this.nabooService.getPlanetas().subscribe( 
      (data : Planeta) => {
        this.varPlaneta = data;
      },
      (error: any)=> {
        this.erro = error;
        console.error('ERROR: ', error);
      });
  }

  next() {
    this.routerNav.navigate(['./coruscant']);
  }

  telaInicial(){
    this.routerNav.navigate(['../']);
  }


}
