import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KlavierComponent } from './klavier.component';

describe('KlavierComponent', () => {
  let component: KlavierComponent;
  let fixture: ComponentFixture<KlavierComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KlavierComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KlavierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
