import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CoruscantService } from './coruscant.service';
import { Planeta } from '../Planetas';

@Component({
  selector: 'app-coruscant',
  templateUrl: './coruscant.component.html',
  styleUrls: ['./coruscant.component.css']
})
export class CoruscantComponent implements OnInit {
  
  varPlaneta: any;
  erro: any;

  public fundo = './assets/espaco.jpg';
  public planetaImg = './assets/coruscant/coruscantPlaneta.png';
  public personagemcoruscant = './assets/coruscant/coruscantPersonagem.png';

  constructor(
    private routerNav: Router,
    private coruscantService: CoruscantService
  ) { 
    this.Obterplanetas();
  }

  ngOnInit() {
  }

  Obterplanetas() {
    this.coruscantService.getPlanetas().subscribe( 
      (data : Planeta) => {
        this.varPlaneta = data;
      },
      (error: any)=> {
        this.erro = error;
        console.error('ERROR: ', error);
      });
  }

  next() {
    this.routerNav.navigate(['./kamino']);
  }

  telaInicial(){
    this.routerNav.navigate(['../']);
  }

}
