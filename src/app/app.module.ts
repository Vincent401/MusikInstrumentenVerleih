import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { InstrumentenUebersichtComponent } from './instrumenten-uebersicht/instrumenten-uebersicht.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatCardModule} from '@angular/material/card';
import { SaiteninsUebersichtComponent } from './saitenins-uebersicht/saitenins-uebersicht.component';
import { BlasinsUebersichtComponent } from './blasins-uebersicht/blasins-uebersicht.component';
import { TasteninsUebersichtComponent } from './tastenins-uebersicht/tastenins-uebersicht.component';
import { SchlaginsUebersichtComponent } from './schlagins-uebersicht/schlagins-uebersicht.component';
import { InstrumentenSeiteComponent } from './instrumenten-seite/instrumenten-seite.component';
import { KlavierComponent } from './klavier/klavier.component';
import {  MatIconModule } from '@angular/material/icon';

@NgModule({
  declarations: [
    AppComponent,
    StartseiteComponent,
    InstrumentenUebersichtComponent,
    SaiteninsUebersichtComponent,
    BlasinsUebersichtComponent,
    TasteninsUebersichtComponent,
    SchlaginsUebersichtComponent,
    InstrumentenSeiteComponent,
    KlavierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
