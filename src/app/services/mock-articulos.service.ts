import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { Articulo, Articulos } from '../models/articulos';

@Injectable({
  providedIn: 'root',
})
export class MockArticulosService {
  constructor() {}
  get() {
    return of(Articulos);
  }
  post(obj: Articulo) {
    return this.post(obj);
  }
}
