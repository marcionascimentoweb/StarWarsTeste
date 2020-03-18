import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { GeonosisService } from './geonosis.service';
import { Planeta } from '../Planetas';

@Component({
  selector: 'app-geonosis',
  templateUrl: './geonosis.component.html',
  styleUrls: ['./geonosis.component.css']
})
export class GeonosisComponent implements OnInit {

  varPlaneta: any;
  erro: any;

  public fundo = './assets/espaco.jpg';
  public planetaImg = './assets/geonosis/GeonosisPlaneta.png';
  public personagemgeonosis = './assets/geonosis/GeonosisPersonagem.png';

  constructor(
    private routerNav: Router,
    private geonosisService: GeonosisService
  ) {
    this.Obterplanetas();
   }

  ngOnInit() {
  }

  Obterplanetas() {
    this.geonosisService.getPlanetas().subscribe( 
      (data : Planeta) => {
        this.varPlaneta = data;
      },
      (error: any)=> {
        this.erro = error;
        console.error('ERROR: ', error);
      });
  }

  next() {
    this.routerNav.navigate(['../']);
  }

  telaInicial(){
    this.routerNav.navigate(['../']);
  }

}
