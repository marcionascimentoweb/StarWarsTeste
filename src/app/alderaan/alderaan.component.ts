import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlderaanService } from './alderaan.service';
import { Planeta } from '../Planetas';

@Component({
  selector: 'app-alderaan',
  templateUrl: './alderaan.component.html',
  styleUrls: ['./alderaan.component.css']
})
export class AlderaanComponent implements OnInit {

  varPlaneta: any;
  erro: any; 
  
  public fundo = './assets/espaco.jpg'
  public planetaImg = './assets/alderaan/alderaanPlaneta.png'
  public personagemAlderaan = './assets/alderaan/alderaanPersonagem.png' 
  

  constructor(
    private routerNav: Router,
    private alderaanService: AlderaanService) { 
      this.Obterplanetas();
    }

  ngOnInit() {
  }

  Obterplanetas() {
    this.alderaanService.getPlanetas().subscribe(
      (data: Planeta) => {
        this.varPlaneta = data;
        },
        (error: any)=> {
          this.erro = error;
          console.error('ERROR: ' , error);
        });
  }

 next() {
    this.routerNav.navigate(['./yavin']);
  }

  telaInicial(){
    this.routerNav.navigate(['../']);
  }
}
  
