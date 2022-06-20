export interface Articulo {
  id?: number;
  name?: string;
  price?: number;
  stock?: number;
}

export const Articulos: Articulo[] = [
  { id: 1, name: 'Televisor 4k OLED ULTRA HD', price: 160000, stock: 59 },
  { id: 2, name: 'Ventilador de pie', price: 11999, stock: 7 },
  { id: 3, name: 'Velador Led flexible', price: 2500, stock: 38 },
  { id: 4, name: 'Notebook Gamer ASUS', price: 224999, stock: 3 },
];
