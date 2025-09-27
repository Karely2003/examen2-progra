import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleApod } from './detalle-apod';

describe('DetalleApod', () => {
  let component: DetalleApod;
  let fixture: ComponentFixture<DetalleApod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleApod]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetalleApod);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
