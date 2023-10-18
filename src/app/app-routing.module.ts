import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'bienvenida',
    loadChildren: () =>
      import('./modules/bienvenida/bienvenida.module').then(
        (m) => m.BienvenidaModule
      ),
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/login/login.module').then(
        (m) => m.LoginModule
      ),
  },
  {
    path: 'repartidor/alta',
    loadChildren: () =>
      import('./modules/repartidor/alta-repartidor/alta-repartidor.module').then(
        (m) => m.AltaRepartidorModule
      ),
  },
  {
    path: 'repartidor/detalle',
    loadChildren: () =>
      import('./modules/repartidor/detalle-repartidor/detalle-repartidor.module').then(
        (m) => m.DetalleRepartidorModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
