import { Component, OnInit } from '@angular/core';
import { Articulo, Articulos } from '../../models/articulos';
import { MockArticulosService } from '../../services/mock-articulos.service';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-articulos',
  templateUrl: './articulos.component.html',
  styleUrls: ['./articulos.component.css'],
})
export class ArticulosComponent implements OnInit {
  title = 'Articulos';
  items: Articulo[] = [];
  submitted = false;

  constructor(private articulosService: MockArticulosService) {}
  FormArticulo = new FormGroup({
    name: new FormControl(''),
    price: new FormControl(parseInt('0'), [
      Validators.required,
      Validators.min(1),
      Validators.max(999999999),
    ]),
  });

  GetArticulos() {
    this.articulosService.get().subscribe((res: Articulo[]) => {
      this.items = res;
    });
  }
  ngOnInit(): void {
    this.GetArticulos();
  }

  Cargar(): void {
    if (this.FormArticulo.invalid) {
      this.submitted = true;
      return;
    }
    let newArticulo: Articulo = this.FormArticulo.value;
    this.items.push(newArticulo);
    this.FormArticulo.reset();
    this.submitted = false;
  }

  VaciarArticulos() {
    this.items = [];
  }
}
