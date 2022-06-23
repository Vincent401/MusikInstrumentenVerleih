import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Component } from '@angular/core';
import { SaiteninsUebersichtComponent } from './saitenins-uebersicht/saitenins-uebersicht.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MusikInstrumentenVerleih';
  instSait:Instrument [] = [
    {picture:'assets/img/saitenins/Gitarre.jpg', title:'AKUSTISCHE GITARRE', text1:'hochwertiges Markeninstrument mit Massivholz Decke inklusive robuster Gitarrenhülle', text2:'Wenn Sie mit einer kleineren Gitarre beginnen wächst das Instrument im laufenden Vertrag selbstverständlich mit. Ein Anruf genügt.', price:'18,00 €', orientation:'KategorienLinks'},
    {picture:'assets/img/saitenins/E-Gitarre.jpg', title:'E-GITARRE', text1:'hochwertiges Markeninstrument (Ibanez, Marshall o.ä.) inklusive robuster Gitarrenhülle, optional mit Amp & Kabel', text2:'Wenn Sie mit einer kleineren Gitarre beginnen wächst das Instrument im laufenden Vertrag selbstverständlich mit. Ein Anruf genügt.', price:'18,00 €', orientation:'KategorienRechts'},
    {picture:'assets/img/saitenins/Violine.jpg', title:'VIOLINE', text1:'hochwertiges Markeninstrument (Sandner, Concerto o.ä.) inklusive Bogen, Etui, Kolophonium, Schulterstütze', text2:'Wenn Sie mit einer kleineren Violine beginnen wächst das Instrument im laufenden Vertrag selbstverständlich mit. Ein Anruf genügt.', price:'23,00 €', orientation:'KategorienLinks'},
  ]
  instBlas:Instrument [] = [
    {picture:'assets/img/blasins/Klarinette.jpg', title:'KLARINETTE', text1:'hochwertiges Markeninstrument (Schreiber, Yamaha o.ä.) inklusive Mundstück, Blattschraube, Etui', text2:'Edles Grenadillholz in seiner schönsten Verwendung. Bitte denken Sie auch an Blätter, Wischer, Bissgummis etc. in unserem Service Pack  (siehe ganz unten). Wir beraten hierzu gerne auch telefonisch.', price:'Ab 33,00 €', orientation:'KategorienLinks'},
    {picture:'assets/img/blasins/Posaune.jpg', title:'POSAUNE', text1:'hochwertiges Markeninstrument (Yamaha, Jupiter o.ä.) inklusive Mundstück, Etui', text2:'Bitte denken Sie auch an Wischer, Fett und Öl etc. in unserem ServicePack  (siehe ganz unten). Wir beraten hierzu gerne auch telefonisch.', price:'Ab 28,00 €', orientation:'KategorienRechts'},
    {picture:'assets/img/blasins/Querflöte.jpg', title:'QUERFLÖTE', text1:'hochwertiges Markeninstrument (Yamaha, Pearl o.ä.) inklusive Etui', text2:'optional mit geb. Kopf für Kinder und dem Service Pack zur Pflege der empfindsamen Klappeninstrumente  (siehe ganz unten).', price:'Ab 23,00 €', orientation:'KategorienLinks'},
    {picture:'assets/img/blasins/Saxophon.jpg', title:'SAXOPHON', text1:'hochwertiges Markeninstrument (Jupiter, Yamaha o.ä.) inklusive Mundstück, Blattschraube, Etui, Tragband', text2:'Sie haben die Wahl zwischen Alt oder Tenor. Bitte denken Sie auch an Blätter, Wischer, Bissgummis etc. in unserem Service Pack (siehe ganz unten). Wir beraten hierzu gerne auch telefonisch.', price:'Ab 23,00 €', orientation:'KategorienRechts'},
    {picture:'assets/img/blasins/Trompete.jpg', title:'TROMPETE', text1:'hochwertiges Markeninstrument (Yamaha, Jupiter o.ä.) inklusive Mundstück, Etui', text2:'Bitte denken Sie auch an Wischer, Fett und Öl etc. in unserem Service Pack  (siehe ganz unten). Wir beraten hierzu gerne auch telefonisch.', price:'Ab 23,00 €', orientation:'KategorienLinks'},
  ]
  instTast:Instrument [] = [
    {picture:'assets/img/tastenins/Keyboard.jpg', title:'KEYBOARD', text1:'hochwertiges Yamaha Keyboard inklusive robuster Hülle, Netzteil. Optional mit Scherenständer und robuster, klappbarer Sitzbank.', text2:'Das Ding spielt wirklich von selbst. Zumindest den Demosong und die Lidbegleitung. Für noch mehr Spielfreude rund um die Uhr beachten Sie auch den Service Pack mit Kopfhörern.  (siehe ganz unten)', price:'Ab 28,00 €', orientation:'KategorienLinks'},
    {picture:'assets/img/tastenins/Klavier.jpg', title:'KLAVIER', text1:'hochwertiges Markeninstrumente von Yamaha', text2:'88 gewichtete Tasten - der perfekte Einstieg in das Klavierspiel. Für noch mehr Spielfreude rund um die Uhr beachten Sie auch den Service Pack mit Kopfhörern.  (siehe ganz unten)', price:'Ab 40,00 €', orientation:'KategorienRechts'},
  ]
  instSchlag:Instrument [] = [
    {picture:'assets/img/schlagins/Pauke.jpg', title:'PAUKE', text1:'hochwertiges Yamaha Keyboard inklusive robuster Hülle, Netzteil. Optional mit Scherenständer und robuster, klappbarer Sitzbank.', text2:'Das Ding spielt wirklich von selbst. Zumindest den Demosong und die Lidbegleitung.', price:'Ab 15,00 €', orientation:'KategorienLinks'},
    {picture:'assets/img/schlagins/Tamburin.jpg', title:'TAMBURIN', text1:'hochwertiges Markeninstrumente von Yamaha', text2:'88 gewichtete Tasten - der perfekte Einstieg in das Klavierspiel. Für noch mehr Spielfreude rund um die Uhr beachten Sie auch den Service Pack mit Kopfhörern.  (siehe ganz unten)', price:'Ab 18,00 €', orientation:'KategorienRechts'},
    {picture:'assets/img/schlagins/Xylophon.jpg', title:'XYLOPHON', text1:'hochwertiges Markeninstrumente von Yamaha', text2:'88 gewichtete Tasten - der perfekte Einstieg in das Klavierspiel. Für noch mehr Spielfreude rund um die Uhr beachten Sie auch den Service Pack mit Kopfhörern.  (siehe ganz unten)', price:'Ab 10,00 €', orientation:'KategorienLinks'},
  ]
  currentInst:String;

  myFunction(): void {
    let x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }

  setNavabarActive(current: String):void{
    let x;

    //none active
    x = document.getElementById("home");
    x.className= "";
    x = document.getElementById("uebersicht");
    x.className= "";
    x = document.getElementById("dev");
    x.className= "";

    //current active
    switch(current){
      case "home":
        x = document.getElementById("home");
        x.className= "active";
        break;
      case "uebersicht":
        x = document.getElementById("uebersicht");
        x.className= "active";
        break;
      case "dev":
        x = document.getElementById("dev");
        x.className= "active";
        break;
    }
  }

  myFunction2():Instrument{
    var inst = JSON.parse(localStorage.getItem('myLSkey'));
    console.log("Speicher : " + JSON.parse(localStorage.getItem('myLSkey')));
    var i;
    for(i = 0;i < this.instSait.length; i++){
      let Instru = this.instSait[i].title;
      if(Instru == inst){
        return this.instSait[i];
      }
    }
    for(i = 0;i < this.instBlas.length; i++){
      let Instru = this.instBlas[i].title;
      if(Instru == inst){
        return this.instBlas[i];
      }
    }
    for(i = 0;i < this.instTast.length; i++){
      let Instru = this.instTast[i].title;
      if(Instru == inst){
        return this.instTast[i];
      }
    }
    for(i = 0;i < this.instSchlag.length; i++){
      let Instru = this.instSchlag[i].title;
      if(Instru == inst){
        return this.instSchlag[i];
      }
    }
    return this.instSait[2];
  
  }

  setCurrentInst(inst: String){
    this.currentInst = inst;
    localStorage.setItem('myLSkey', JSON.stringify(inst));
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