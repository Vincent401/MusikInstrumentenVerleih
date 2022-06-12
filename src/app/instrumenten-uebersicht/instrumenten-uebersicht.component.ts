import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-instrumenten-uebersicht',
  templateUrl: './instrumenten-uebersicht.component.html',
  styleUrls: ['./instrumenten-uebersicht.component.css']
})
export class InstrumentenUebersichtComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#333533'; 
  }

}
