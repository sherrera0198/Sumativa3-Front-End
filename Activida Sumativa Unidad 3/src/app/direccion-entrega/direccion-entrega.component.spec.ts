import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DireccionEntregaComponent } from './direccion-entrega.component';

describe('DireccionEntregaComponent', () => {
  let component: DireccionEntregaComponent;
  let fixture: ComponentFixture<DireccionEntregaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DireccionEntregaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DireccionEntregaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
