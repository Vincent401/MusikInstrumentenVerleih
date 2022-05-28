import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentenUebersichtComponent } from './instrumenten-uebersicht.component';

describe('InstrumentenUebersichtComponent', () => {
  let component: InstrumentenUebersichtComponent;
  let fixture: ComponentFixture<InstrumentenUebersichtComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentenUebersichtComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentenUebersichtComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
