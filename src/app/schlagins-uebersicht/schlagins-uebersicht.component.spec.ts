import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchlaginsUebersichtComponent } from './schlagins-uebersicht.component';

describe('SchlaginsUebersichtComponent', () => {
  let component: SchlaginsUebersichtComponent;
  let fixture: ComponentFixture<SchlaginsUebersichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SchlaginsUebersichtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SchlaginsUebersichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
