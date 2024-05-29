import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MotosListComponent } from './motos-list/motos-list.component';
import { FormsModule } from '@angular/forms';
import { MotoAboutComponent } from './moto-about/moto-about.component';
import { MotoMotosComponent } from './moto-motos/moto-motos.component';
import { MotoCartComponent } from './moto-cart/moto-cart.component';
import { InputNumberComponent } from './input-number/input-number.component';



@NgModule({
  declarations: [
    AppComponent,
    MotosListComponent,
    MotoAboutComponent,
    MotoMotosComponent,
    MotoCartComponent,
    InputNumberComponent,
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],

  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
