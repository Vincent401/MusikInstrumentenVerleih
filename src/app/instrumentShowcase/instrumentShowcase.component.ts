import { Component, OnInit } from '@angular/core';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-instrumentShowcase',
  templateUrl: './instrumentShowcase.component.html',
  styleUrls: ['./instrumentShowcase.component.css']
})
export class instrumentShowcaseComponent implements OnInit {

  constructor(protected appComp: AppComponent) { }

 
  ngOnInit(): void {
    this.appComp.setNavabarActive("dev");
  }

}

