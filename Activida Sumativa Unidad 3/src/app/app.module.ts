import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { InicioComponent } from './inicio/inicio.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxPaginationModule } from 'ngx-pagination';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { CatalogoComponent } from './catalogo/catalogo.component';
import { Router, RouterModule, Routes } from '@angular/router';
import { ContactoComponent } from './contacto/contacto.component';
import { CarrouselComponent } from './carrousel/carrousel.component';
import { PaginaInicioComponent } from './pagina-inicio/pagina-inicio.component';
import { FormularioPagoComponent } from './formulario-pago/formulario-pago.component';
import { ModalPagoComponent } from './modal-pago/modal-pago.component';
import { ModalAceptadoComponent } from './modal-aceptado/modal-aceptado.component';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { DireccionEntregaComponent } from './direccion-entrega/direccion-entrega.component';

const routes: Routes =[
  {
    path: '',
    component:PaginaInicioComponent
  },
  {
    path: 'inicio',
    component:PaginaInicioComponent
  },
  {
    path: 'productos',
    component:CatalogoComponent
  },
  {
    path: 'contacto',
    component:ContactoComponent
  },
  {
    path: 'pagar',
    component:FormularioPagoComponent
  },
  {
    path: 'ModalPago',
    component:ModalPagoComponent
  },
  {
    path: 'ModalAceptado',
    component:ModalAceptadoComponent
  },
  {
    path: 'ModalDireccion',
    component:DireccionEntregaComponent
  }
];

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    InicioComponent,
    CatalogoComponent,
    ContactoComponent,
    CarrouselComponent,
    PaginaInicioComponent,
    FormularioPagoComponent,
    ModalPagoComponent,
    ModalAceptadoComponent,
    DireccionEntregaComponent,
 

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    NgxPaginationModule, 
    Ng2SearchPipeModule,
    RouterModule,
    [RouterModule.forRoot(routes)]
  ],
  providers: [],
  exports:[RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
