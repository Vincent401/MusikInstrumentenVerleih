import { Component, Directive, ElementRef, OnInit } from '@angular/core';
import { KlavierComponent } from '../klavier/klavier.component';
  
@Component({
  selector: 'app-instrumenten-seite',
  templateUrl: './instrumenten-seite.component.html',
  styleUrls: ['./instrumenten-seite.component.css']
})
export class InstrumentenSeiteComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#333533'; 
    KlavierComponent;
  }

}