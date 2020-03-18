import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HothService } from './hoth.service';
import { Planeta } from '../Planetas';

@Component({
  selector: 'app-hoth',
  templateUrl: './hoth.component.html',
  styleUrls: ['./hoth.component.css']
})
export class HothComponent implements OnInit {
  
  varPlaneta: any;
  erro: any;

  public fundo = './assets/espaco.jpg';
  public planetaImg = './assets/hoth/hothPlaneta.png';
  public personagemHoth = './assets/hoth/hothPersonagem.png';

  constructor(private routerNav: Router, 
    private hothService: HothService) {
      this.Obterplanetas();      
     }

  ngOnInit() {
  }

  telaInicial() {
    this.routerNav.navigate(['../'])
  }

  Obterplanetas() {
    this.hothService.getPlanetas().subscribe(
      (data: Planeta) => {
        this.varPlaneta = data;
      },
      (error: any) => {
        this.erro = error;
        console.error('ERROR: ', error);
      });
  }

  next() {
    this.routerNav.navigate(['./dagobah']);
  }

}
