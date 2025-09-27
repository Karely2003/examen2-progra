import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListadoApod } from './listado-apod';

describe('ListadoApod', () => {
  let component: ListadoApod;
  let fixture: ComponentFixture<ListadoApod>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListadoApod]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListadoApod);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
