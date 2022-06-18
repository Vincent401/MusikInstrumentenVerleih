import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-instrumenten-uebersicht',
  templateUrl: './instrumenten-uebersicht.component.html',
  styleUrls: ['./instrumenten-uebersicht.component.css']
})
export class InstrumentenUebersichtComponent implements OnInit {

  constructor(protected appComp: AppComponent) { }

  ngOnInit(): void {
    this.appComp.setNavabarActive("uebersicht");
  }

}
