import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Moto } from '../motos-list/moto';

@Component({
  selector: 'app-input-number',
  templateUrl: './input-number.component.html',
  styleUrls: ['./input-number.component.scss']
})
export class InputNumberComponent {

  @Input()
  quantity!: number;

  @Input()
  max!: number;

  @Output()
  quantityChange:EventEmitter<number> = new EventEmitter<number>();

  @Output()
  maxReached:EventEmitter<String> = new EventEmitter<String>();


  upQuantity():void{
    if(this.quantity < this.max){
      this.quantity++;
      this.quantityChange.emit(this.quantity);
    }
    else
        this.maxReached.emit("se alcanzó el max");
  }
  
  downQuantity():void{
    if(this.quantity > 0)
      this.quantity--;
      this.quantityChange.emit(this.quantity);
    }
  
  changeQuantity(event: any): void {
    console.log(event);
    this.quantityChange.emit(this.quantity);
  }
  cambioDePuntaje(event: { preventDefault():any;key: any;target:any },moto:Moto):void{
    if (event.key<0 || event.key>10)
      event.preventDefault();
    
  }
  verifyMotoQuantity(moto){
    if(moto.quantity > moto.stock) {
      alert("No hay suficientes cervezas en stock");
    }
    if(moto.quantity < 0) {
      alert("No se pueden encargar cervezas negativas ");
    }
    moto.quantity = 0;
  }


}
