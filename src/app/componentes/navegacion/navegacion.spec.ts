import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Navegacion } from './navegacion';

describe('Navegacion', () => {
  let component: Navegacion;
  let fixture: ComponentFixture<Navegacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Navegacion]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Navegacion);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
