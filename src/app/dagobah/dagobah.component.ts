import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DagobahService } from './dagobah.service';
import { Planeta } from '../Planetas';

@Component({
  selector: 'app-dagobah',
  templateUrl: './dagobah.component.html',
  styleUrls: ['./dagobah.component.css']
})
export class DagobahComponent implements OnInit {

  varPlaneta: any;
  erro: any;

  public fundo = './assets/espaco.jpg';
  public planetaImg = './assets/dagobah/DagobahPlaneta.png';
  public personagemDagobah = './assets/dagobah/Personagem.png';

  constructor(
    private routerNav: Router,
    private dagobahSerive: DagobahService) {
      this.Obterplanetas();
     }

  ngOnInit() {
  }

  Obterplanetas() {
    this.dagobahSerive.getPlanetas().subscribe( 
      (data : Planeta) => {
        this.varPlaneta = data;
      },
      (error: any)=> {
        this.erro = error;
        console.error('ERROR: ', error);
      });
  }

  next() {
    this.routerNav.navigate(['./bespin']);
  }

  telaInicial(){
    this.routerNav.navigate(['../']);
  }

}
