import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EscolhaComponent } from './components/views/escolha/escolha.component';
import { InicioComponent } from './components/views/inicio/inicio.component';

const routes: Routes = [
  {
    path: '',
    component: InicioComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
