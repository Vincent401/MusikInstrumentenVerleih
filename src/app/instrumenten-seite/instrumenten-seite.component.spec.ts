import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InstrumentenSeiteComponent } from './instrumenten-seite.component';

describe('InstrumentenSeiteComponent', () => {
  let component: InstrumentenSeiteComponent;
  let fixture: ComponentFixture<InstrumentenSeiteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InstrumentenSeiteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InstrumentenSeiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
