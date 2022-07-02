import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { StartseiteComponent } from './startseite/startseite.component';
import { InstrumentenUebersichtComponent } from './instrumenten-uebersicht/instrumenten-uebersicht.component';
import { SaiteninsUebersichtComponent } from './saitenins-uebersicht/saitenins-uebersicht.component';
import { BlasinsUebersichtComponent } from './blasins-uebersicht/blasins-uebersicht.component';
import { TasteninsUebersichtComponent } from './tastenins-uebersicht/tastenins-uebersicht.component';
import { SchlaginsUebersichtComponent } from './schlagins-uebersicht/schlagins-uebersicht.component';
import { InstrumentenSeiteComponent } from './instrumenten-seite/instrumenten-seite.component';
import { BookingDialog } from './instrumenten-seite/instrumenten-seite.component';
import { KlavierComponent } from './klavier/klavier.component';


import { MatCardModule} from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule} from '@angular/material/stepper'
import {MatButtonModule} from '@angular/material/button';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

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
    KlavierComponent,
    BookingDialog
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatDialogModule,
    MatStepperModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    HttpClientModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
