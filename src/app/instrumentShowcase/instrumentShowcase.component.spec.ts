import { ComponentFixture, TestBed } from '@angular/core/testing';

import { instrumentShowcaseComponent } from './instrumentShowcase.component';

describe('instrumentShowcaseComponent', () => {
  let component: instrumentShowcaseComponent;
  let fixture: ComponentFixture<instrumentShowcaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ instrumentShowcaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(instrumentShowcaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
