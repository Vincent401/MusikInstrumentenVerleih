import { CursorError } from '@angular/compiler/src/ml_parser/lexer';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MusikInstrumentenVerleih';

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
}
