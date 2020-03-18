import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KaminoService } from './kamino.service';
import { Planeta } from '../Planetas';

@Component({
  selector: 'app-kamino',
  templateUrl: './kamino.component.html',
  styleUrls: ['./kamino.component.css']
})
export class KaminoComponent implements OnInit {

  varPlaneta: any;
  erro: any;

  public fundo = './assets/espaco.jpg';
  public planetaImg = './assets/Kamino/kaminoPlaneta.png';
  public personagemkamino = './assets/Kamino/kaminoPersonagem.png';


  constructor(
    private routerNav: Router,
    private kaminoService: KaminoService
  ) {
    this.Obterplanetas();
   }

  ngOnInit() {
  }

  Obterplanetas() {
    this.kaminoService.getPlanetas().subscribe( 
      (data : Planeta) => {
        this.varPlaneta = data;
      },
      (error: any)=> {
        this.erro = error;
        console.error('ERROR: ', error);
      });
  }

  next() {
    this.routerNav.navigate(['./geonosis']);
  }

  telaInicial(){
    this.routerNav.navigate(['../']);
  }

}
