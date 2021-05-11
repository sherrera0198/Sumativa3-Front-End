import { Component, OnInit } from '@angular/core';
import { CarritoService } from '../carrito.service';
import {AppComponent}  from '../app.component'
import { Router } from '@angular/router';

@Component({
  selector: 'app-formulario-pago',
  templateUrl: './formulario-pago.component.html',
  styleUrls: ['./formulario-pago.component.css']
})
export class FormularioPagoComponent implements OnInit {

  carrito = this.carritoService.Carrito;
  total: number = 0;
  constructor( public carritoService:CarritoService , private router:Router) { }

  ngOnInit(): void {
    /*
    let variable = JSON.parse(localStorage.getItem('elementos') || '{}');
    if(variable!=null)
    {
      for(let elementos of variable){
        this.carrito.push(elementos)
        console.log(elementos)
      }
    };
    */
  }
  eliminar(codigo:number){
    let codigoBorrar = 0;
    let cont = 0 ;
    for ( let x of this.carritoService.Carrito){
      if (x.codigo==codigo){
        codigoBorrar = cont
      }
      cont += 1;
    }
    this.carritoService.Carrito.splice(codigoBorrar,1); 
    localStorage.clear();
    localStorage.setItem('elementos', JSON.stringify(this.carritoService.Carrito));
  };

  Ontotal (){
    this.total= 0
    for(let a of this.carritoService.Carrito){
    
      this.total = this.total + a.precio 
    }
  };

  pagar(){
    this.router.navigate(['ModalDireccion']);
  }

}

class Producto {
  constructor( public codigo : number , public nombre: string , public precio : number, public descripcion : string , public img : string){

  };
}