import { Component, Directive, ElementRef, Inject, OnInit } from '@angular/core';
import { KlavierComponent } from '../klavier/klavier.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, Validators} from '@angular/forms';
import { AppComponent } from '../app.component';
import { RentService } from '../Service_Rent/rent.service';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import {MatButtonModule} from '@angular/material/button';

export interface dialogData{
  instrument: string;
}


@Component({
  selector: 'app-instrumenten-seite',
  templateUrl: './instrumenten-seite.component.html',
  styleUrls: ['./instrumenten-seite.component.css']
})
export class InstrumentenSeiteComponent implements OnInit {
  safeHtml: SafeHtml;

  constructor(private elementRef: ElementRef, public dialog: MatDialog, private appcomp: AppComponent, private sanitizer: DomSanitizer) { }
  inst =  this.appcomp.myFunction2();

  ngOnInit(): void {
    this.safeHtml = this.sanitizer.bypassSecurityTrustHtml(
      this.inst.text3)


    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#333533'; 
    KlavierComponent;
    this.inst =  this.appcomp.myFunction2();

    const wrap = document.getElementById('showcaseWrap');
    const klav = document.getElementById('klavierShow');
    const gita = document.getElementById('gitarreShow');
    if(this.inst.title == "KLAVIER" || this.inst.title == "KEYBOARD"){
        klav.style.display = 'inline';
        wrap.style.display = 'inline';
    }
    else if(this.inst.title == "AKUSTISCHE GITARRE" || this.inst.title == "E-GITARRE"){
      gita.style.display = 'inline';
      wrap.style.display = 'inline';
    }
    else{
      wrap.style.display = 'none';
    }

  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BookingDialog, 
      {
        width:'500px', 
        height:'500px',
        data: {instrument: this.inst.title}
      }
    );

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');      
    });
  }

}

@Component({
  selector: 'booking-dialog',
  templateUrl: 'bookingdialog.html',
  styleUrls: ['./instrumenten-seite.component.css']
})
export class BookingDialog {
  
  firstFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    mail: ['', Validators.email],
    phone: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    street: ['', Validators.required],
    zip: ['', Validators.required],
    city: ['', Validators.required],
    iban: ['', Validators.required],
  });

  constructor(
    public dialogRef: MatDialogRef<BookingDialog>,    
    private _formBuilder: FormBuilder,
    private rentService: RentService,  
    @Inject(MAT_DIALOG_DATA) public data: dialogData,
  ){}

  onNoClick(): void {
    
  }

  
  send():void {    
    this.rentService.sendPostRent(
      this.firstFormGroup.controls["name"].value,
      this.firstFormGroup.controls["mail"].value,
      this.firstFormGroup.controls["phone"].value,
      this.secondFormGroup.controls["street"].value,
      parseInt(this.secondFormGroup.controls["zip"].value),
      this.secondFormGroup.controls["city"].value,
      this.secondFormGroup.controls["iban"].value,
      this.data.instrument
    );    
    this.dialogRef.close();
  }
}

class Instrument {  
  picture : string;
  title : string;  
  text1 : string;  
  text2 : string;  
  text3: string;
  price : string;  
  orientation : string;
}  
