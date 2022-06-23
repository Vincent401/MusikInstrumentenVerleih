import { Component, Directive, ElementRef, Inject, OnInit } from '@angular/core';
import { KlavierComponent } from '../klavier/klavier.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, Validators} from '@angular/forms';
import { AppComponent } from '../app.component';


  
@Component({
  selector: 'app-instrumenten-seite',
  templateUrl: './instrumenten-seite.component.html',
  styleUrls: ['./instrumenten-seite.component.css']
})
export class InstrumentenSeiteComponent implements OnInit {

  constructor(private elementRef: ElementRef, public dialog: MatDialog, public appcomp: AppComponent) { }
  inst =  this.appcomp.myFunction2();

  ngOnInit(): void {
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
})
export class BookingDialog {
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });

  constructor(
    public dialogRef: MatDialogRef<BookingDialog>,    
    private _formBuilder: FormBuilder
  ){}

  onNoClick(): void {
    this.dialogRef.close();
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