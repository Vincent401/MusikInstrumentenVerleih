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
    {
      picture:'assets/img/saitenins/Gitarre.jpg', 
      title:'AKUSTISCHE GITARRE', 
      text1:'hochwertiges Markeninstrument mit Massivholz Decke inklusive robuster Gitarrenhülle', 
      text2:'Wenn Sie mit einer kleineren Gitarre beginnen wächst das Instrument im laufenden Vertrag selbstverständlich mit. Ein Anruf genügt.', 
      text3:"<table><tr><td>SKU:</td><td>Siena 650PF</td></tr><tr><td>Marke:</td><td>Siena</td></tr><tr><td>Kategorie:</td><td>Klassische Gitarren</td></tr><tr><td>Größe:</td><td>4/4</td></tr><tr><td>Decke:</td><td>Fichte massiv</td></tr><tr><td>Boden:</td><td>Mahagoni</td></tr><tr><td>Zargen:</td><td>Mahagoni</td></tr><tr><td>Hals:</td><td>Mahagoni</td></tr><tr><td>Griffbrett:</td><td>Palisander</td></tr><tr><td>Finish:</td><td>Hochglanz</td></tr><tr><td>Geeignet für:</td><td>Anfänger, Schüler, Fortgeschrittene, Hobbymusiker</td></tr></table>", 
      price:'18,00 €', 
      orientation:'KategorienLinks'
    },
    {
      picture:'assets/img/saitenins/E-Gitarre.jpg', 
      title:'E-GITARRE', 
      text1:'hochwertiges Markeninstrument (Ibanez, Marshall o.ä.) inklusive robuster Gitarrenhülle, optional mit Amp & Kabel', 
      text2:'Wenn Sie mit einer kleineren Gitarre beginnen wächst das Instrument im laufenden Vertrag selbstverständlich mit. Ein Anruf genügt.',
      text3:"<table><tr><td>SKU:</td><td>    PA510V BL</td></tr><tr><td>    Korpus:</td><td>        Erle</td></tr><tr><td>    Griffbrett:</td><td>    Palisander</td></tr><tr><td>    Mensur: </td><td>    648 mm</td></tr><tr><td>    Bünde:</td><td>22</td></tr><tr><td>    Hals:</td><td>    Ahorn</td></tr><tr><td>    Mechaniken:</td><td>    Grover Locking</td></tr></table>", 
      price:'18,00 €', orientation:'KategorienRechts'
    },
    {
      picture:'assets/img/saitenins/Violine.jpg', 
      title:'VIOLINE', 
      text1:'hochwertiges Markeninstrument (Sandner, Concerto o.ä.) inklusive Bogen, Etui, Kolophonium, Schulterstütze', 
      text2:'Wenn Sie mit einer kleineren Violine beginnen wächst das Instrument im laufenden Vertrag selbstverständlich mit. Ein Anruf genügt.', 
      text3:"<table><tr><td>SKU:</td><td>TK44Classic</td><tr><td>Marke:</td><td>    Thomann Streicher</td></tr><tr><td>Größe:</td><td>    4/4</td></tr><tr><td>Griffbrett:</td><td>Ebenholz</td></tr><tr><td>Decke: </td><td>Fichte</td></tr><tr><td>Boden, Zargen und Hals:</td><td>Ahorn</td></tr><tr><td>Wirbel:</td><td>Ebenholz</td></tr><tr><td>Kinnhalter:</td><td>Holz</td></tr><tr><td>Saitenhalter Typ:</td><td>Feinstimm</td></tr><tr><td>Maße:</td><td>1357 x 422 x 849 mm</td></tr><tr><td>Farbe:</td><td>Schwarz</td></tr></table>",
      price:'23,00 €', 
      orientation:'KategorienLinks'},
  ]
  instBlas:Instrument [] = [
    {
      picture:'assets/img/blasins/Klarinette.jpg', 
      title:'KLARINETTE', 
      text1:'hochwertiges Markeninstrument (Schreiber, Yamaha o.ä.) inklusive Mundstück, Blattschraube, Etui', 
      text2:'Edles Grenadillholz in seiner schönsten Verwendung. Bitte denken Sie auch an Blätter, Wischer, Bissgummis etc. in unserem Service Pack  (siehe ganz unten). Wir beraten hierzu gerne auch telefonisch.',
      text3:"<table><tr><td>SKU:</td><td>BC1131L-2-0</td></tr><tr><td>Marke:</td><td>BuffetCrampon</td></tr><tr><td>Kategorie:</td><td>B-Klarinetten</td></tr><tr><td>Serie:</td><td>R13</td></tr><tr><td>Stimmung:</td><td>B</td></tr><tr><td>Griffweise:</td><td>BöhmSystem</td></tr><tr><td>Material:</td><td>Grenadill,versilberteMechanik</td></tr><tr><td>Ausführung:</td><td>polyzylindrischeBohrung,Es-Heber,18Klappen,6Ringe,doppelteFischhautpolster,verstellbarerDaumenhalter,BlaustahlNadelfedern</td></tr><tr><td>Optionen:</td><td>KorpusinGreenLine,KorpusinMopane</td></tr><tr><td>Geeignetfür:</td><td>Fortgeschrittene,Hobbymusiker,Musik-Studenten</td></tr><tr><td>Inklusive:</td><td>Etui,Putzset,Zubehör</td></tr></table>", 
      price:'Ab 33,00 €', 
      orientation:'KategorienLinks'
    },
    {
      picture:'assets/img/blasins/Posaune.jpg', 
      title:'POSAUNE', 
      text1:'hochwertiges Markeninstrument (Yamaha, Jupiter o.ä.) inklusive Mundstück, Etui', 
      text2:'Bitte denken Sie auch an Wischer, Fett und Öl etc. in unserem ServicePack  (siehe ganz unten). Wir beraten hierzu gerne auch telefonisch.',
      text3:"<table><tr><td>SKU:</td><td>BSMS14-1-0</td></tr><tr><td>Marke:</td><td>B&S Markneukirchen</td></tr><tr><td>Kategorie:</td><td>Tenorposaunen mit Quartventil</td></tr><tr><td>Serie:</td><td>Meistersinger</td></tr><tr><td>Stimmung:</td><td>B/F</td></tr><tr><td>Material:</td><td>handgehämmerter Rotmessing Schallbecher, hartverchromter Innenzug aus Neusilber, Neusilber Zugbogen, Goldmessing Außenzüge, lackiert</td></tr><tr><td>Bohrung:</td><td>13,89 mm, Quartventilbogen 14,5 mm</td></tr><tr><td>Schalldurchmesser:</td><td>230 mm, optional: 214 mm</td></tr><tr><td>Ausführung:</td><td>handgefertigt, asymmetrische Bögen am Hauptstimmzug und am Quartventil, austauschbare Mundrohre, Quartventil mit 3B™-Kugelgelenken</td></tr><tr><td>Optionen:</td><td>Neusilber Zug, Neusilber Rand am Schallbecher</td></tr><tr><td>Geeignetfür:</td><td>Fortgeschrittene, Hobbymusiker, Musik-Studenten, Profis</td></tr><tr><td>Inklusive:</td><td>2 austauschbare Mundrohre, Etui mit Rucksackgarnitur, Mundstück, Putzset, Zubehör</td></tr></table>", 
      price:'Ab 28,00 €', orientation:'KategorienRechts'
    },
    {
      picture:'assets/img/blasins/Querflöte.jpg', 
      title:'QUERFLÖTE', 
      text1:'hochwertiges Markeninstrument (Yamaha, Pearl o.ä.) inklusive Etui', 
      text2:'optional mit geb. Kopf für Kinder und dem Service Pack zur Pflege der empfindsamen Klappeninstrumente  (siehe ganz unten).', 
      text3:"<table><tr><td>SKU:</td><td>CF 401 RBEH</td></tr><tr><td>Marke:</td><td>Sankyo</td></tr><tr><td>Ausführung:</td><td>Konzertflöten</td></tr><tr><td>Ausführung:</td><td>Vollsilber Flöte, heavy</td></tr><tr><td>Kopfstück:</td><td>Sterling Silber 925AG, verschiedene Kopfstücke wählbar</td></tr><tr><td>Korpus:</td><td>Sterling Silber 925AG</td></tr><tr><td>Mechanik:</td><td>Sterling Silber 925AG, Ringklappen, E-Mechanik, Offset (vorgezogenes G), Spitzdeckelmechanik</td></tr><tr><td>Fußstück:</td><td>H-Fuß</td></tr><tr><td>Wandstärke:</td><td>0,42 mm</td></tr><tr><td>Geeignet für:</td><td>Schüler, Fortgeschrittene, Hobbymusiker, Musik-Studenten</td></tr><tr><td>Inklusive:</td><td>Etui, Putzset, Zubehör, Tasche</td></tr></table>",
      price:'Ab 23,00 €', 
      orientation:'KategorienLinks'
    },
    {
      picture:'assets/img/blasins/Saxophon.jpg', 
    title:'SAXOPHON', 
      text1:'hochwertiges Markeninstrument (Jupiter, Yamaha o.ä.) inklusive Mundstück, Blattschraube, Etui, Tragband', 
      text2:'Sie haben die Wahl zwischen Alt oder Tenor. Bitte denken Sie auch an Blätter, Wischer, Bissgummis etc. in unserem Service Pack (siehe ganz unten). Wir beraten hierzu gerne auch telefonisch.',
      text3:"<table><tr><td>SKU:</td><td>YTS-280</td></tr><tr><td>Marke:</td><td>    Yamaha</td></tr><tr><td>Kategorie:</td><td>Tenor Saxophone</td></tr><tr><td>Serie:</td><td>Yamaha Student</td></tr><tr><td>Stimmung:</td><td>B</td></tr><tr><td>Material:</td><td>Messing, Goldlack lackiert</td></tr><tr><td>Ausführung:</td><td>S-Bogen 280-Style, Hoch-Fis-Klappe, vordere F-Klappe, geteilter Klappenschutz, verbesserte tief H/Cis-Verbindung, verstellbarer Daumenhalter</td></tr><tr><td>Geeignet für:</td><td>Anfänger, Schüler, Fortgeschrittene</td></tr><tr><td>Inklusive:</td><td>Etui mit Rucksackgarnitur, Mundstück 4C, Putzset, Zubehör</td></tr></table>", 
      price:'Ab 23,00 €', 
      orientation:'KategorienRechts'
    },
    {
      picture:'assets/img/blasins/Trompete.jpg', 
      title:'TROMPETE', 
      text1:'hochwertiges Markeninstrument (Yamaha, Jupiter o.ä.) inklusive Mundstück, Etui', 
      text2:'Bitte denken Sie auch an Wischer, Fett und Öl etc. in unserem Service Pack  (siehe ganz unten). Wir beraten hierzu gerne auch telefonisch.',
      text3:"<table><tr><td>SKU:</td><td>YTR-8345G</td></tr><tr><td>Marke:</td><td>Yamaha</td></tr><tr><td>Kategorie:</td><td>Périnetventil Trompeten</td></tr><tr><td>Serie:</td><td>Yamaha Custom Xeno</td></tr><tr><td>Stimmung:</td><td>B</td></tr><tr><td>Material:</td><td>Goldmessing, Messing Mundrohr, Neusilber Außenzüge, lackiert</td></tr><tr><td>Bohrung:</td><td>L 11,73 mm</td></tr><tr><td>Schalldurchmesser:</td><td>123 mm</td></tr><tr><td>Ventile:</td><td>3 Monel-Ventile</td></tr><tr><td>Ausführung:</td><td>einteiliges Schallstück, handgehämmert, neuer Schallbecherverlauf, neues, leichtes Ventilgehäuse, zwei Stützen auf dem Hauptstimmzug</td></tr><tr><td>Geeignet für:</td><td>Fortgeschrittene, Hobbymusiker, Musik-Studenten, Profis</td></tr><tr><td>Inklusive:</td><td>Doppeletui mit Rucksackgarnitur, Mundstück, Putzset, Zubehör</td></tr></table", 
      price:'Ab 23,00 €', 
      orientation:'KategorienLinks'
    },
  ]
  instTast:Instrument [] = [
    {
      picture:'assets/img/tastenins/Keyboard.jpg', 
      title:'KEYBOARD', 
      text1:'hochwertiges Yamaha Keyboard inklusive robuster Hülle, Netzteil. Optional mit Scherenständer und robuster, klappbarer Sitzbank.', 
      text2:'Das Ding spielt wirklich von selbst. Zumindest den Demosong und die Lidbegleitung. Für noch mehr Spielfreude rund um die Uhr beachten Sie auch den Service Pack mit Kopfhörern.  (siehe ganz unten)',
      text3:"<table><tr><td>SKU:</td><td>YDP-165 B</td></tr><tr><td>Marke:</td><td>    Yamaha</td></tr><tr><td>Anzahl Tasten:</td><td>88 gewichtete</td></tr><tr><td>Polyphonie: </td><td>192-stimmig</td></tr><tr><td>Sounds:</td><td>10</td></tr><tr><td>Funktionen:</td><td>Dual/Layers, Duo, Metronom</td></tr><tr><td>Kopfhöreranschluss:</td><td>2x 6,3mm Klinke</td></tr><tr><td>Lautsprecher:</td><td>2 x 20W</td></tr><tr><td>Maße:</td><td>1357 x 422 x 849 mm</td></tr><tr><td>Farbe:</td><td>Schwarz</td></tr></table>",
      price:'Ab 28,00 €', 
      orientation:'KategorienLinks'},
    {
      picture:'assets/img/tastenins/Klavier.jpg', 
      title:'KLAVIER', 
      text1:'hochwertiges Markeninstrumente von Yamaha', 
      text2:'88 gewichtete Tasten - der perfekte Einstieg in das Klavierspiel. Für noch mehr Spielfreude rund um die Uhr beachten Sie auch den Service Pack mit Kopfhörern.  (siehe ganz unten)',
      text3:"<table><tr><td>SKU:</td><td>YMHK-B2</td></tr><tr><td>Marke:</td><td>    Yamaha</td></tr><tr><td>Anzahl Tasten:</td><td>88</td></tr><tr><td>Anzahl pedale:</td><td>3</td></tr><tr><td>Maße:</td><td>113cm x 150cm x 54cm</td></tr><tr><td>Gewicht:</td><td>203kg</td></tr><tr><td>Farbe:</td><td>Mahagoni Hochglanz</td></tr></table>", 
      price:'Ab 40,00 €',
      orientation:'KategorienRechts'
    },
  ]
  instSchlag:Instrument [] = [
    {
      picture:'assets/img/schlagins/Pauke.jpg', 
      title:'PAUKE', 
      text1:'hochwertiges Yamaha Keyboard inklusive robuster Hülle, Netzteil. Optional mit Scherenständer und robuster, klappbarer Sitzbank.', 
      text2:'Das Ding spielt wirklich von selbst. Zumindest den Demosong und die Lidbegleitung.',
      text3:"<table><tr><td>SKU:</td><td>2PARFKG26</td></tr><tr><td>Marke:</td><td>Adams</td></tr><tr><td>Kategorie:</td><td>Pauken</td></tr><tr><td>Serie:</td><td>Revolution</td></tr><tr><td>Größe:</td><td>26\"</td></tr><tr><td>Kesselmaterial:</td><td>Kupfer glatt</td></tr><tr><td>Fell:</td><td>Remo Renaissance</td></tr><tr><td>Eigenschaften:</td><td>parabolischer Kessel, innovatives Balanced Action Pedalsystem, Stimmanzeiger, Feinstimmer, Untergestell leicht abnehmbar, Füße zusammenklappbar (bequemer Transport), höhenverstellbar 80 cm auf 90 cm</td></tr><tr><td>Zubehör:</td><td>Hülle (auf Anfrage), Stimmschlüssel</td></tr></table", 
      price:'Ab 15,00 €', 
      orientation:'KategorienLinks'
    },
    {
      picture:'assets/img/schlagins/Tamburin.jpg', 
      title:'TAMBURIN', 
      text1:'hochwertiges Markeninstrumente von Yamaha', 
      text2:'88 gewichtete Tasten - der perfekte Einstieg in das Klavierspiel. Für noch mehr Spielfreude rund um die Uhr beachten Sie auch den Service Pack mit Kopfhörern.  (siehe ganz unten)',
      text3:"<table><tr><td>SKU:</td><td>NINO46</td></tr><tr><td>Marke:</td><td>    Nino</td></tr><tr><td>Kranz:</td><td>Schellenkranz</td></tr><tr><td>Rahmenmaterial:</td><td>Holz</td></tr><tr><td>Bauform:</td><td>rund</td></tr><tr><td>Farbe:</td><td>Natur</td></tr><tr><td>Anzahl Schellen:</td><td>6 Paar</td></tr><tr><td>Schellenanordnung:</td><td>einreihig</td></tr><tr><td>Montagehalterung:</td><td>nein</td></tr></table>", 
      price:'Ab 18,00 €', 
      orientation:'KategorienRechts'
    },
    {
      picture:'assets/img/schlagins/Xylophon.jpg', 
      title:'XYLOPHON', 
      text1:'hochwertiges Markeninstrument von Yamaha', 
      text2:'88 gewichtete Tasten - der perfekte Einstieg in das Klavierspiel. Für noch mehr Spielfreude rund um die Uhr beachten Sie auch den Service Pack mit Kopfhörern.  (siehe ganz unten)', 
      text3:"<table><tr><td>SKU:</td><td>2MBA2HRV50</td></tr><tr><td>Marke:</td><td>Yamaha</td></tr><tr><td>Kategorie:</td><td>Xylophone</td></tr><tr><td>Serie:</td><td>Artist Robert van Sice</td></tr><tr><td>Stimmung:</td><td>A=442Hz, (andere Stimmung auf Anfrage)</td></tr><tr><td>Tonumfang:</td><td>5 Oktaven, C2 – C7</td></tr><tr><td>Klangplatten:</td><td>Palisander, 72 mm – 40 mm</td></tr><tr><td>Maße:</td><td>Länge: 255 cm, Breite: 104 cm – 40 cm, Höhe: 88 cm – 108 cm</td></tr><tr><td>Zubehör:</td><td>Hülle, Schlägel, Voyager Gestell</td></tr></table>",
      price:'Ab 10,00 €', 
      orientation:'KategorienLinks'
    },
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
  text3 : string;
  price : string;  
  orientation : string;
}  