import { Component, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-blasins-uebersicht',
  templateUrl: './blasins-uebersicht.component.html',
  styleUrls: ['./blasins-uebersicht.component.css']
})
export class BlasinsUebersichtComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  inst:Instrument [] = [
    {picture:'assets/img/blasins/Klarinette.jpg', title:'MONATSMIETE KLARINETTE', text1:'hochwertiges Markeninstrument (Schreiber, Yamaha o.ä.) inklusive Mundstück, Blattschraube, Etui', text2:'Edles Grenadillholz in seiner schönsten Verwendung. Bitte denken Sie auch an Blätter, Wischer, Bissgummis etc. in unserem Service Pack  (siehe ganz unten). Wir beraten hierzu gerne auch telefonisch.', price:'Ab 33,00 €', orientation:'KategorienLinks'},
    {picture:'assets/img/blasins/Posaune.jpg', title:'MONATSMIETE POSAUNE', text1:'hochwertiges Markeninstrument (Yamaha, Jupiter o.ä.) inklusive Mundstück, Etui', text2:'Bitte denken Sie auch an Wischer, Fett und Öl etc. in unserem ServicePack  (siehe ganz unten). Wir beraten hierzu gerne auch telefonisch.', price:'Ab 28,00 €', orientation:'KategorienRechts'},
    {picture:'assets/img/blasins/Querflöte.jpg', title:'MONATSMIETE QUERFLÖTE', text1:'hochwertiges Markeninstrument (Yamaha, Pearl o.ä.) inklusive Etui', text2:'optional mit geb. Kopf für Kinder und dem Service Pack zur Pflege der empfindsamen Klappeninstrumente  (siehe ganz unten).', price:'Ab 23,00 €', orientation:'KategorienLinks'},
    {picture:'assets/img/blasins/Saxophon.jpg', title:'MONATSMIETE SAXOPHON', text1:'hochwertiges Markeninstrument (Jupiter, Yamaha o.ä.) inklusive Mundstück, Blattschraube, Etui, Tragband', text2:'Sie haben die Wahl zwischen Alt oder Tenor. Bitte denken Sie auch an Blätter, Wischer, Bissgummis etc. in unserem Service Pack (siehe ganz unten). Wir beraten hierzu gerne auch telefonisch.', price:'Ab 23,00 €', orientation:'KategorienRechts'},
    {picture:'assets/img/blasins/Trompete.jpg', title:'MONATSMIETE TROMPETE', text1:'hochwertiges Markeninstrument (Yamaha, Jupiter o.ä.) inklusive Mundstück, Etui', text2:'Bitte denken Sie auch an Wischer, Fett und Öl etc. in unserem Service Pack  (siehe ganz unten). Wir beraten hierzu gerne auch telefonisch.', price:'Ab 23,00 €', orientation:'KategorienLinks'},
  ]

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#333533'; 
  }

}

class Instrument {  
  picture !: string;
  title !: string;  
  text1 !: string;  
  text2 !: string;  
  price !: string;  
  orientation !: string;
}  