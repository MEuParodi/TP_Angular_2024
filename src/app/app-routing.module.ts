import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MotoAboutComponent } from './moto-about/moto-about.component';
import { MotoMotosComponent } from './moto-motos/moto-motos.component';

const routes: Routes = [
  {
    path: " ",
    redirectTo: "motos",
    pathMatch: 'full'
  },
  {
    path: "home",
    component: MotoMotosComponent
  },
  {
    path: "about",
    component: MotoAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
