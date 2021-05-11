import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { InicioComponent} from '../inicio/inicio.component';


@Component({
  selector: 'app-catalogo',
  templateUrl: './catalogo.component.html',
  styleUrls: ['./catalogo.component.css']
})
export class CatalogoComponent implements OnInit, AfterViewInit {

  
  @ViewChild(InicioComponent) child : InicioComponent;
  searchText !: string;
  page!:number;
  lista: Producto[] = [];
  constructor() { }
  nombre : string;

  ngOnInit(  ): void {
    

  }

  ngAfterViewInit(){
    this.lista = this.child.ListaProductos ;
 
  }

}

class Producto {
  constructor( public codigo : number , public nombre: string , public precio : number, public descripcion : string , public img : string){

  };
}