import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ImobiliarioComponent } from './content/imobiliario/imobiliario.component';
import { LogradouroComponent } from './content/logradouro/logradouro.component';
// import { environment } from 'src/environments/environment.development';

const routes: Routes = [
  { path: 'imobiliario', component:  ImobiliarioComponent},
  { path: 'logradouro', component:  LogradouroComponent},
];

@NgModule({
  //imports: [RouterModule.forRoot(routes, {  useHash: environment.useHash})],
  imports: [RouterModule.forRoot(routes, {  useHash: false})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
