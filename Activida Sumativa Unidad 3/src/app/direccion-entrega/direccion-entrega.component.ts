import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CarritoService } from '../carrito.service';

@Component({
  selector: 'app-direccion-entrega',
  templateUrl: './direccion-entrega.component.html',
  styleUrls: ['./direccion-entrega.component.css']
})
export class DireccionEntregaComponent implements OnInit {

  listaProductos : string [] = []; 
  total = 0;
  mostrarPago = false
  constructor( private router:Router,  public carritoService:CarritoService  ){}

  formulario : FormGroup = new FormGroup ({
    pais : new FormControl('',[ Validators.required ]),
    region : new FormControl('',[ Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    ciudad : new FormControl('',[ Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    comuna : new FormControl('',[ Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    calle : new FormControl('',[ Validators.required, Validators.minLength(3), Validators.maxLength(30)]),
    numero: new FormControl('',[ Validators.required, ]),
    cpostal: new FormControl('',[ Validators.required, ]),
   
  });
  ngOnInit(){}

  get pais() { return this.formulario.get('pais'); };
  get region() { return this.formulario.get('region'); };
  get ciudad() { return this.formulario.get('ciudad'); };
  get comuna() { return this.formulario.get('comuna'); };
  get calle() { return this.formulario.get('calle'); };
  get numero() { return this.formulario.get('numero'); };
  get cPostal() { return this.formulario.get('cPostal'); };

  agregar() {
    let glosaError = "" ;
    if (this.formulario.value.pais == ""){
        glosaError= glosaError + " ,  " + " País"  ;
    }
    if (this.formulario.value.region =="" ){
      glosaError= glosaError + " ,  " + "Región";
    }
    if (this.formulario.value.ciudad == ""){
      glosaError= glosaError + " ,  " + " Ciudad";
    }
    if (this.formulario.value.comuna == ""){
      glosaError= glosaError + " ,  " + " Comuna";
    }
    if (this.formulario.value.calle == ""){
      glosaError= glosaError + " ,  " + " Calle";
    }
    if (this.formulario.value.numero == ""){
      glosaError= glosaError + " ,  " + " Número";
    }
    if (this.formulario.value.cPostal == ""){
      glosaError= glosaError + " ,  " + " Código Postal";
    }
    if (glosaError != ""){
      alert("Error en " + glosaError);
      
    }else {
     this.mostrarPago=true
     this.carritoService.direccion.push(this.formulario.value.pais,
                                        this.formulario.value.region,
                                        this.formulario.value.ciudad,
                                        this.formulario.value.comuna,
                                        this.formulario.value.calle,
                                        this.formulario.value.numero,
                                        this.formulario.value.cpostal
      )
     this.router.navigate(['ModalPago']);

    }

  }


}
