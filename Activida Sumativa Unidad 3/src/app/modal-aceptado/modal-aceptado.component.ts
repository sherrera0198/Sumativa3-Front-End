import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-modal-aceptado',
  templateUrl: './modal-aceptado.component.html',
  styleUrls: ['./modal-aceptado.component.css']
})
export class ModalAceptadoComponent implements OnInit {

  carrito = this.carritoService.Carrito;
  direccion = this.carritoService.direccion;
  total = 0;
  constructor( public carritoService:CarritoService, private router:Router) { }

  ngOnInit(): void {
  }

    Ontotal (){
    this.total= 0
    for(let a of this.carritoService.Carrito){
    
      this.total = this.total + a.precio 
    }
  };

  principal(){
    localStorage.clear();
 
    this.router.navigate(['inicio']);

  }



}
