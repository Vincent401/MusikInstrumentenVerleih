import { Component, ElementRef, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-schlagins-uebersicht',
  templateUrl: './schlagins-uebersicht.component.html',
  styleUrls: ['./schlagins-uebersicht.component.css']
})
export class SchlaginsUebersichtComponent implements OnInit {

  constructor(private elementRef: ElementRef,private appcomp: AppComponent) { }

  inst:Instrument [] = [
    {picture:'assets/img/schlagins/Pauke.jpg', title:'PAUKE', text1:'hochwertiges Yamaha Keyboard inklusive robuster Hülle, Netzteil. Optional mit Scherenständer und robuster, klappbarer Sitzbank.', text2:'Das Ding spielt wirklich von selbst. Zumindest den Demosong und die Lidbegleitung.', price:'Ab 15,00 €', orientation:'KategorienLinks'},
    {picture:'assets/img/schlagins/Tamburin.jpg', title:'TAMBURIN', text1:'hochwertiges Markeninstrumente von Yamaha', text2:'88 gewichtete Tasten - der perfekte Einstieg in das Klavierspiel. Für noch mehr Spielfreude rund um die Uhr beachten Sie auch den Service Pack mit Kopfhörern.  (siehe ganz unten)', price:'Ab 18,00 €', orientation:'KategorienRechts'},
    {picture:'assets/img/schlagins/Xylophon.jpg', title:'XYLOPHON', text1:'hochwertiges Markeninstrumente von Yamaha', text2:'88 gewichtete Tasten - der perfekte Einstieg in das Klavierspiel. Für noch mehr Spielfreude rund um die Uhr beachten Sie auch den Service Pack mit Kopfhörern.  (siehe ganz unten)', price:'Ab 10,00 €', orientation:'KategorienLinks'},
  ]

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#333533'; 
    this.appcomp.setNavabarActive("");
  }

  setCurentInst(inst:String){
    this.appcomp.setCurrentInst(inst);
    console.log(inst);
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