import { Component, ElementRef, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-saitenins-uebersicht',
  templateUrl: './saitenins-uebersicht.component.html',
  styleUrls: ['./saitenins-uebersicht.component.css']
})
export class SaiteninsUebersichtComponent implements OnInit {

  constructor(private elementRef: ElementRef, private appcomp: AppComponent) { }

  inst:Instrument [] = [
    {picture:'assets/img/saitenins/Gitarre.jpg', title:'AKUSTISCHE GITARRE', text1:'hochwertiges Markeninstrument mit Massivholz Decke inklusive robuster Gitarrenhülle', text2:'Wenn Sie mit einer kleineren Gitarre beginnen wächst das Instrument im laufenden Vertrag selbstverständlich mit. Ein Anruf genügt.', price:'18,00 €', orientation:'KategorienLinks'},
    {picture:'assets/img/saitenins/E-Gitarre.jpg', title:'E-GITARRE', text1:'hochwertiges Markeninstrument (Ibanez, Marshall o.ä.) inklusive robuster Gitarrenhülle, optional mit Amp & Kabel', text2:'Wenn Sie mit einer kleineren Gitarre beginnen wächst das Instrument im laufenden Vertrag selbstverständlich mit. Ein Anruf genügt.', price:'18,00 €', orientation:'KategorienRechts'},
    {picture:'assets/img/saitenins/Violine.jpg', title:'VIOLINE', text1:'hochwertiges Markeninstrument (Sandner, Concerto o.ä.) inklusive Bogen, Etui, Kolophonium, Schulterstütze', text2:'Wenn Sie mit einer kleineren Violine beginnen wächst das Instrument im laufenden Vertrag selbstverständlich mit. Ein Anruf genügt.', price:'23,00 €', orientation:'KategorienLinks'}
  ]

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#333533'; 
    this.appcomp.setNavabarActive("");
  }

  setCurentInst(inst:String){
    this.appcomp.setCurrentInst(inst);
    console.log(inst)
  }

}

class Instrument {  
  picture : string;
  title : string;  
  text1 : string;  
  text2 : string;  
  price : string;  
  orientation : string;
}  
