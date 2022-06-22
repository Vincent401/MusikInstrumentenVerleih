import { Component, Directive, ElementRef, Inject, OnInit } from '@angular/core';
import { KlavierComponent } from '../klavier/klavier.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, Validators} from '@angular/forms';

  
@Component({
  selector: 'app-instrumenten-seite',
  templateUrl: './instrumenten-seite.component.html',
  styleUrls: ['./instrumenten-seite.component.css']
})
export class InstrumentenSeiteComponent implements OnInit {

  constructor(private elementRef: ElementRef, public dialog: MatDialog) { }

  ngOnInit(): void {
    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#333533'; 
    KlavierComponent;
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