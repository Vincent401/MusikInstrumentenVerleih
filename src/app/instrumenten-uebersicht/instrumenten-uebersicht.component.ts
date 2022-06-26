import { Component, ElementRef, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-instrumenten-uebersicht',
  templateUrl: './instrumenten-uebersicht.component.html',
  styleUrls: ['./instrumenten-uebersicht.component.css']
})
export class InstrumentenUebersichtComponent implements OnInit {

  constructor(private elementRef: ElementRef, protected appComp: AppComponent) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#333533'; 
    this.appComp.setNavabarActive("uebersicht");
  }

}
