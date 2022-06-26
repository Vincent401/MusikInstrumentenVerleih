import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TasteninsUebersichtComponent } from './tastenins-uebersicht.component';

describe('TasteninsUebersichtComponent', () => {
  let component: TasteninsUebersichtComponent;
  let fixture: ComponentFixture<TasteninsUebersichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TasteninsUebersichtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TasteninsUebersichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
