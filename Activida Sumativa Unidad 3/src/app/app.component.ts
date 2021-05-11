import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { CarritoService } from './carrito.service';
import { InicioComponent} from './inicio/inicio.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'SumativaUnidad3';
  carrito = this.carritoService.Carrito;
  total: number = 0;

  constructor(public carritoService:CarritoService , private router:Router){}

  ngOnInit(){
    let variable = JSON.parse(localStorage.getItem('elementos') || '{}');
    if(variable!=null)
    {
      for(let elementos of variable){
        this.carrito.push(elementos)
        console.log(elementos)
      }
    };
    
  };
  Ontotal (){
    this.total= 0
    for(let a of this.carritoService.Carrito){
    
      this.total = this.total + a.precio 
    }
  }


  eliminar( codigo : number){
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
  }


  pagar(productos:Producto[]){

    this.router.navigate(['pagar']);

  }

}

class Producto {
  constructor( public codigo : number , public nombre: string , public precio : number, public descripcion : string , public img : string){

  };
}