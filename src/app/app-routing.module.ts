import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartseiteComponent } from './startseite/startseite.component';
import { InstrumentenUebersichtComponent } from './instrumenten-uebersicht/instrumenten-uebersicht.component';

const routes: Routes = [
  { path: 'startseite', component: StartseiteComponent },
  { path: 'inuebersicht', component: InstrumentenUebersichtComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
