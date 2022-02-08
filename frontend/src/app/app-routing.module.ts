import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlapComponent } from './components/views/flap/flap.component';
import { InicioComponent } from './components/views/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },

  {
    path: 'flap',
    component: FlapComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
