import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CarritoService  implements OnInit{

  Carrito : Producto[] = []
  direccion : string[]=[]

  
  
  constructor() { 
    
  }
  ngOnInit(){
    let variable = JSON.parse(localStorage.getItem('elementos') || '{}');
    if(variable!=null)
      for(let elementos of variable){
        this.Carrito.push(elementos)
        console.log(variable)
      }
     
       
  };

  
}

class Producto {
  constructor( public codigo : number , public nombre: string , public precio : number, public descripcion : string , public img : string){

  };
}
