import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Moto } from './motos-list/moto';

@Injectable({
  providedIn: 'root'
})


export class MotoCartService {
  private _cartList: Moto[] = [];
  cartList: BehaviorSubject<Moto[]> =new BehaviorSubject(this._cartList);
  total : number;

  constructor() { }

  addToCart(moto: Moto) {
    let item: Moto | undefined = this._cartList.find((v1) => v1.model == moto.model);
      if(!item){
        this._cartList.push ({...moto});
      }
      else{
        item.quantity += moto.quantity;
       
      }
   console.log(this._cartList);
   this.cartList.next(this._cartList);
  }
 
  


}
 
