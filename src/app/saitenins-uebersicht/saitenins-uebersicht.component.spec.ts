import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaiteninsUebersichtComponent } from './saitenins-uebersicht.component';

describe('SaiteninsUebersichtComponent', () => {
  let component: SaiteninsUebersichtComponent;
  let fixture: ComponentFixture<SaiteninsUebersichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaiteninsUebersichtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaiteninsUebersichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
