import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule} from '@angular/material/form-field';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { LoginComponent } from './auth/components/login/login.component';
import { AdminComponent } from './components/administrador/admin/admin.component';
import { CajeroComponent } from './components/cajero/cajero.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ProductosComponent } from './components/inventario/secciones/productos/productos/productos.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    CajeroComponent,
    InventarioComponent,
    
    ProductosComponent
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
