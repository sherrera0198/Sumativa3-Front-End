import { Component, OnInit , Output, EventEmitter} from '@angular/core';
import { ProductosComponent } from '../productos/productos.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbPaginationConfig} from '@ng-bootstrap/ng-bootstrap'; 
import { FormControl, FormGroup } from '@angular/forms';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  ListaProductos: Producto[] = [];
  
  page!:number;
  searchText !: string;
  @Output() listaCarrito = new EventEmitter<Producto[]>(); 


  constructor(public carritoService:CarritoService){}


  ngOnInit(): void {
    this.ListaProductos.push(new Producto(1, "Camiseta Prepartido Manchester United" ,  34990, "Mientras la energía aumenta en las tribunas del Old Trafford los jugadores del Man U salen a la cancha a prepararse para el partido. En sus rutinas prepartido visten esta camiseta prepartido Manchester United" , "./assets/img/Camiseta_Prepartido_Manchester_United_Rojo_FR6033_01_laydown.jpg"),
    new Producto(2, "Short Local Colo Colo 2021" ,  24990, "Indumentaria de local de primer equipo de Colo Colo, oficial para temporada 2021" , './assets/img/Short_Local_Club_Colo-Colo_Negro_EY3697_01_laydown.jpg'),
    new Producto(3, "Camiseta Local Colo Colo 2021",  49990, "Indumentaria de local de primer equipo de Colo Colo, oficial para temporada 2021", './assets/img/Camiseta_Local_Club_Colo-Colo_Blanco_EY3709_01_laydown.jpg'),
    new Producto(4, "Camiseta Tercer Uniforme Arsenal 20/21", 54990, "Una joya que ilumina el cielo del norte de Londres. Esta camiseta del Arsenal de adidas simboliza la energía electrificante de los partidos que se viven bajo las luces del Emirates Stadium.", './assets/img/Camiseta_Tercer_Uniforme_Arsenal_20-21_Azul_GH6653_01_laydown.jpg'),
    new Producto(5, "Camiseta Visitante Manchester United 20/21",  49990, "Nacida en las calles. Esta camiseta de fútbol del Manchester United luce un estampado inspirado en los mosaicos que decoran la ciudad de Manchester. Especialmente creada para hinchas, presenta un corte ligeramente más holgado que el que visten los jugadores en el terreno de juego", './assets/img/Camiseta_Visitante_Manchester_United_Beige_ED7388_01_laydown.jpg'),
    );

    /*
    let variable = JSON.parse(localStorage.getItem('elementos') || '{}');
    if(variable!=null)
    {
      for(let elementos of variable){
        this.carritoService.Carrito.push(elementos)
      }
    };
  */
    //localStorage.clear(); 
    

  }

  AgregarCarro(productoElegido) {
   
    this.carritoService.Carrito.push(productoElegido)
    localStorage.setItem('elementos', JSON.stringify(this.carritoService.Carrito));
    console.log( JSON.parse(localStorage.getItem('elementos') || '{}'))

  }
  

}


class Producto {
  constructor( public codigo : number , public nombre: string , public precio : number, public descripcion : string , public img : string){

  };
}