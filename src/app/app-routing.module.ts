import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { AlderaanComponent } from './alderaan/alderaan.component';
import { YavinIVComponent } from './yavin-iv/yavin-iv.component';
import { HothComponent } from './hoth/hoth.component';
import { DagobahComponent } from './dagobah/dagobah.component';
import { BespinComponent } from './bespin/bespin.component';
import { EndorComponent } from './endor/endor.component';
import { NabooComponent } from './naboo/naboo.component';
import { CoruscantComponent } from './coruscant/coruscant.component';
import { KaminoComponent } from './kamino/kamino.component';
import { GeonosisComponent } from './geonosis/geonosis.component';


export const routes: Routes = [
  {path: '', component: InicioComponent},
  {path: 'alderaan', component: AlderaanComponent},
  {path: 'yavin', component: YavinIVComponent},
  {path: 'hoth', component: HothComponent},
  {path: 'dagobah', component: DagobahComponent},
  {path: 'bespin', component: BespinComponent},
  {path: 'endor', component: EndorComponent},
  {path: 'naboo', component: NabooComponent},
  {path: 'coruscant', component: CoruscantComponent},
  {path: 'kamino', component: KaminoComponent},
  {path: 'geonosis', component: GeonosisComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
