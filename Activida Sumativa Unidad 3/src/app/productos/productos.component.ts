import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  listaProductos : Producto [] = []; 

  formulario : FormGroup = new FormGroup ({
    codigo : new FormControl('',[ Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    nombre : new FormControl('',[ Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    precio : new FormControl('',[ Validators.required, Validators.minLength(3), Validators.maxLength(10)]),
    descripcion : new FormControl('',[ Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
  });


  
  constructor() { }

  ngOnInit(): void {
    let variable = JSON.parse(localStorage.getItem("elementos") || '{}');
    if(variable!=null)
      for(let elementos of variable)
        this.listaProductos.push(elementos)
    localStorage.clear();
  }

  get codigo() { return this.formulario.get('codigo'); };
  get nombre() { return this.formulario.get('nombre'); };
  get precio() { return this.formulario.get('precio'); };
  get descripcion() { return this.formulario.get('descripcion'); };



  agregar() {
    /// Agregar  función para validar que no está repetido 

    if (this.formulario.valid){
      this.listaProductos.push(
        new Producto(
          this.formulario.value.codigo,
          this.formulario.value.nombre,
          this.formulario.value.precio,
          this.formulario.value.descripcion,
        )
      )
    }
  }

}

class Producto {
  constructor( public codigo : number , public nombre: string , public precio : number, public descripcion : string ){

  };
}