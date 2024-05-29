import { Component, OnInit } from '@angular/core';
import { Observable, observable } from 'rxjs';
import { MotoCartService } from '../moto-cart.service';
import { MotoDataService } from '../moto-data.service';
import { Moto } from '../motos-list/moto';
import { MotosListComponent } from '../motos-list/motos-list.component';

@Component({
  selector: 'app-moto-cart',
  templateUrl: './moto-cart.component.html',
  styleUrls: ['./moto-cart.component.scss']
})

export class MotoCartComponent implements OnInit {


  cartList: Moto[];
  constructor(private cart: MotoCartService) {

    cart.cartList.subscribe((observable: Moto[]) => this.cartList = observable);
  }
  ngOnInit(): void {

  }

  total(): number {
    let total = 0
      for (let i in this.cartList) {
        total += this.cartList[i].price * this.cartList[i].quantity;
      }
    return total;
  }




}



