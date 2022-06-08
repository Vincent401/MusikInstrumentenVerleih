import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlasinsUebersichtComponent } from './blasins-uebersicht.component';

describe('BlasinsUebersichtComponent', () => {
  let component: BlasinsUebersichtComponent;
  let fixture: ComponentFixture<BlasinsUebersichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BlasinsUebersichtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BlasinsUebersichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
