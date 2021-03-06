import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/login/login.component';
import { AdminComponent } from './components/administrador/admin/admin.component';
import { CajeroComponent } from './components/cajero/cajero.component';
import { InfotrabajadoresComponent } from './components/trabajador/infotrabajadores/infotrabajadores.component';
import { ProductosComponent } from './components/inventario/productos/productos.component';
import { ProveedoresComponent } from './components/inventario/proveedores/proveedores.component';
import { MercanciaComponent } from './components/inventario/mercancia/mercancia.component';
import { EditartrabajadorComponent } from './components/trabajador/editartrabajador/editartrabajador.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    CajeroComponent,
    ProductosComponent,
    ProveedoresComponent,
    InfotrabajadoresComponent,
    MercanciaComponent,
    EditartrabajadorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatFormFieldModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
