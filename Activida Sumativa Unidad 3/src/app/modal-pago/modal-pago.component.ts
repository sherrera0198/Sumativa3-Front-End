import {Component} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-modal-pago',
  templateUrl: './modal-pago.component.html',
  styleUrls: ['./modal-pago.component.css']
})
export class ModalPagoComponent  {
  

  listaProductos : string [] = []; 
  total = 0;
  constructor( private router:Router,  public carritoService:CarritoService  ){}

  formulario : FormGroup = new FormGroup ({
    tipoTarjeta : new FormControl('',[ Validators.required]),
    nombre : new FormControl('',[ Validators.required, Validators.minLength(10), Validators.maxLength(50)]),
    nTarjeta : new FormControl('',[ Validators.required, Validators.minLength(16), Validators.maxLength(16)]),
    codSeguridad : new FormControl('',[ Validators.required, Validators.minLength(3), Validators.maxLength(4)]),
    fechaExp: new FormControl('',[ Validators.required, ]),
   
  });

  get tipoTarjeta() { return this.formulario.get('tipoTarjeta'); };
  get nombre() { return this.formulario.get('nombre'); };
  get nTarjeta() { return this.formulario.get('nTarjeta'); };
  get codSeguridad() { return this.formulario.get('codSeguridad'); };
  get fechaExp() { return this.formulario.get('fechaExp'); };


  agregar() {
    let glosaError = "" ;
    if (this.formulario.value.nTarjeta.toString().length != 16  ){
        glosaError= glosaError + " ,  " + " largo de número de tarjeta"  ;
    }
    if (this.formulario.value.codSeguridad.toString().length  != 4 ){
      glosaError= glosaError + " ,  " + " largo de código de seguridad";
    }
    if (this.formulario.value.tipoTarjeta == ""){
      glosaError= glosaError + " ,  " + " Tipo de tarjeta";
    }
    if (this.formulario.value.nombre == ""){
      glosaError= glosaError + " ,  " + " Nombre de titular";
    }
    if (this.formulario.value.fechaExp == ""){
      glosaError= glosaError + " ,  " + " Fecha de expiracion";
    }
    if (glosaError != ""){
      alert("Error en " + glosaError);
      
    }else {
      this.router.navigate(['ModalAceptado']);
    }

  }
  Ontotal (){
    this.total= 0
    for(let a of this.carritoService.Carrito){
    
      this.total = this.total + a.precio 
    }
  };


}
