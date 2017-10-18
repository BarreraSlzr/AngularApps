import { IAlimento, IVariante } from '../interfaces/interfaces';
import { Ingrediente } from './ingrediente';
import { Precio, Cantidad, Sort } from './util';

export class Alimento extends Precio implements IAlimento {
  public sort: Sort;

  constructor(
    public _id: string,
    public nombre: string,
    public precio: Cantidad,
    public ingredientes: Ingrediente[]
  ){
    super( _id, nombre, precio);
    this.sort.alfabeticamente( ingredientes);
  }
}

export class Variante extends Alimento implements IVariante {

  constructor(
    public _id: string,
    public nombre: string,
    public precio: Cantidad,
    public ingredientes: Ingrediente[],
    public idAlimentoPrincipal: string
  ){
    super( _id, nombre, precio, ingredientes);
  }
}
