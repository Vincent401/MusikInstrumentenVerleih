import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartseiteComponent } from './startseite/startseite.component';
import { InstrumentenUebersichtComponent } from './instrumenten-uebersicht/instrumenten-uebersicht.component';
import { SaiteninsUebersichtComponent } from './saitenins-uebersicht/saitenins-uebersicht.component';

const routes: Routes = [
  { path: '',   redirectTo: '/startseite', pathMatch: 'full' },
  { path: 'startseite', component: StartseiteComponent },
  { path: 'inuebersicht', component: InstrumentenUebersichtComponent },
  { path: 'saiteninst', component: SaiteninsUebersichtComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
