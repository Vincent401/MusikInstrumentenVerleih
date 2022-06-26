import { Component, Directive, ElementRef, Inject, OnInit } from '@angular/core';
import { KlavierComponent } from '../klavier/klavier.component';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { FormBuilder, Validators} from '@angular/forms';
import { RentService } from '../Service_Rent/rent.service';



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
  name:string;
  firstFormGroup = this._formBuilder.group({
    name: ['', Validators.required],
    mail: ['', Validators.required],
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
  ){}

  onNoClick(): void {
    this.dialogRef.close();
  }

  send():void {    

    
    
    this.rentService.sendPostRent(
      this.firstFormGroup.controls["name"].value,
      this.firstFormGroup.controls["mail"].value,
      this.firstFormGroup.controls["phone"].value,
      this.secondFormGroup.controls["street"].value,
      this.secondFormGroup.controls["zip"].value,
      this.secondFormGroup.controls["city"].value,
      this.secondFormGroup.controls["iban"].value,
      ""
    );
    
  }
}