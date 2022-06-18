import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StartseiteComponent } from './startseite/startseite.component';
import { InstrumentenUebersichtComponent } from './instrumenten-uebersicht/instrumenten-uebersicht.component';
import { SaiteninsUebersichtComponent } from './saitenins-uebersicht/saitenins-uebersicht.component';
import { BlasinsUebersichtComponent } from './blasins-uebersicht/blasins-uebersicht.component';
import { TasteninsUebersichtComponent } from './tastenins-uebersicht/tastenins-uebersicht.component';
import { SchlaginsUebersichtComponent } from './schlagins-uebersicht/schlagins-uebersicht.component';
import { instrumentShowcaseComponent } from './instrumentShowcase/instrumentShowcase.component';

const routes: Routes = [
  { path: '',   redirectTo: '/startseite', pathMatch: 'full' },
  { path: 'startseite', component: StartseiteComponent },
  { path: 'inuebersicht', component: InstrumentenUebersichtComponent },
  { path: 'saiteninst', component: SaiteninsUebersichtComponent},
  { path: 'blasinst', component: BlasinsUebersichtComponent},
  { path: 'tastinst', component: TasteninsUebersichtComponent},
  { path: 'schlaginst', component: SchlaginsUebersichtComponent},
  { path: 'showcase', component: instrumentShowcaseComponent}
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
