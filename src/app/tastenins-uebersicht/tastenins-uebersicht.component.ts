import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tastenins-uebersicht',
  templateUrl: './tastenins-uebersicht.component.html',
  styleUrls: ['./tastenins-uebersicht.component.css']
})
export class TasteninsUebersichtComponent implements OnInit {

  constructor() { }

  inst:Instrument [] = [
    {picture:'assets/img/tastenins/Keyboard.jpg', title:'MONATSMIETE KEYBOARD', text1:'hochwertiges Yamaha Keyboard inklusive robuster Hülle, Netzteil. Optional mit Scherenständer und robuster, klappbarer Sitzbank.', text2:'Das Ding spielt wirklich von selbst. Zumindest den Demosong und die Lidbegleitung. Für noch mehr Spielfreude rund um die Uhr beachten Sie auch den Service Pack mit Kopfhörern.  (siehe ganz unten)', price:'Ab 28,00 €', orientation:'KategorienLinks'},
    {picture:'assets/img/tastenins/Klavier.jpg', title:'MONATSMIETE KLAVIER', text1:'hochwertiges Markeninstrumente von Yamaha', text2:'88 gewichtete Tasten - der perfekte Einstieg in das Klavierspiel. Für noch mehr Spielfreude rund um die Uhr beachten Sie auch den Service Pack mit Kopfhörern.  (siehe ganz unten)', price:'Ab 40,00 €', orientation:'KategorienRechts'},
  ]

  ngOnInit(): void {
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
