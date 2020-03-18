import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { YavinService } from './yavin.service';
import { Planeta } from '../Planetas';

@Component({
  selector: 'app-yavin-iv',
  templateUrl: './yavin-iv.component.html',
  styleUrls: ['./yavin-iv.component.css']
})
export class YavinIVComponent implements OnInit {

  varPlaneta:  any;
  erro: any;

  public fundo = './assets/espaco.jpg';
  public planetaImg = './assets/YavinIV/YavinIVPlaneta.png';
  public personagemyavin = './assets/YavinIV/YavinIVPersonagem.png';
  

  constructor(private routerNav: Router, 
    private yavinService: YavinService) { 
      this.Obterplanetas();
    }
  ngOnInit() {  }

  telaInicial(){
    this.routerNav.navigate(['../']);
  }

  
 next() {
  this.routerNav.navigate(['./hoth']);
}

  Obterplanetas() {
    this.yavinService.getPlanetas().subscribe(
      (data: Planeta) => {
        this.varPlaneta = data;
        console.log('O data que recebemos', data);
        console.log('A variavel que preenchemos', this.varPlaneta);
      }, 
      (error: any) => {
        this.erro = error;
        console.error('ERROR:', error);
      });
  }

}
