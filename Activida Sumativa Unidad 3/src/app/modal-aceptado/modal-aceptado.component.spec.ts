import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAceptadoComponent } from './modal-aceptado.component';

describe('ModalAceptadoComponent', () => {
  let component: ModalAceptadoComponent;
  let fixture: ComponentFixture<ModalAceptadoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModalAceptadoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAceptadoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
