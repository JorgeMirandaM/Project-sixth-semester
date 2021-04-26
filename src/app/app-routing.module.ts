import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './auth/components/login/login.component';
import { AdminComponent } from './components/administrador/admin/admin.component';
import { CajeroComponent } from './components/cajero/cajero.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { ProductosComponent } from './components/inventario/secciones/productos/productos/productos.component';

const routes: Routes = [
  {path: '', component: LoginComponent },
  {path:'administrador',component:AdminComponent},
  {path:'cajero',component:CajeroComponent},
  {path:'inventario', component:InventarioComponent},
  {path: 'productos', component:ProductosComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})


export class AppRoutingModule { }
