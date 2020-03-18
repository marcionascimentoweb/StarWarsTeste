import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './inicio/inicio.component';
import { AlderaanComponent } from './alderaan/alderaan.component';
import { HttpClientModule } from '@angular/common/http';
import { YavinIVComponent } from './yavin-iv/yavin-iv.component';
import { HothComponent } from './hoth/hoth.component';
import { DagobahComponent } from './dagobah/dagobah.component';
import { BespinComponent } from './bespin/bespin.component';
import { EndorComponent } from './endor/endor.component';
import { NabooComponent } from './naboo/naboo.component';
import { CoruscantComponent } from './coruscant/coruscant.component';
import { KaminoComponent } from './kamino/kamino.component';
import { GeonosisComponent } from './geonosis/geonosis.component';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    AlderaanComponent,
    YavinIVComponent,
    HothComponent,
    DagobahComponent,
    BespinComponent,
    EndorComponent,
    NabooComponent,
    CoruscantComponent,
    KaminoComponent,
    GeonosisComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
