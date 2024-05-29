import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Moto } from './motos-list/moto';

const URL = "https://62b468bda36f3a973d336151.mockapi.io/moto/moto";



@Injectable({
  providedIn: 'root'
})
export class MotoDataService {


    
constructor(private http: HttpClient) { }

  public getAll(): Observable<Moto[]>{
    return this.http.get<Moto[]>(URL)
    .pipe(
      tap( (motos: Moto[])=>motos.forEach(moto => moto.quantity = 0)  )
    );
  }
}
