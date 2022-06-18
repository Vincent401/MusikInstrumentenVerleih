import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-startseite',
  templateUrl: './startseite.component.html',
  styleUrls: ['./startseite.component.css']
})
export class StartseiteComponent implements OnInit {

  constructor(protected appComp: AppComponent) { }

  ngOnInit(): void {
    this.appComp.setNavabarActive("home");
  }

}
