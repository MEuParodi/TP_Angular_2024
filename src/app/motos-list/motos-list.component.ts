import { Component } from '@angular/core';
import { MotoCartService } from '../moto-cart.service';
import { MotoDataService } from '../moto-data.service';
import { Moto } from './moto';

@Component({
  selector: 'app-motos-list',
  templateUrl: './motos-list.component.html',
  styleUrls: ['./motos-list.component.scss']
})
export class MotosListComponent {

  motos: Moto []= [];

constructor(
  private cart: MotoCartService,
  private motoDataService: MotoDataService) { 
}

ngOnInit(): void{
  this.motoDataService.getAll()
 .subscribe(motos => this.motos= motos);
}

addToCart(moto: Moto):void{
  this.cart.addToCart(moto);
  moto.stock -= moto.quantity;
  moto.quantity = 0;
}

maxReached(m: String){
  console.log (m);
}

}

