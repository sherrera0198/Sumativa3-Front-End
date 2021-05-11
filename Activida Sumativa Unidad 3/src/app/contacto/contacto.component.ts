import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {

  constructor(public carritoService:CarritoService) { }
  carrito = this.carritoService.Carrito;
  ngOnInit(): void {

    
  }

}
