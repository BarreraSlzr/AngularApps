import { Stock, Cantidad } from './util';
import { IIngrediente } from '../interfaces/interfaces';

export class Ingrediente extends Stock implements IIngrediente {
  constructor(
    public _id: string,
    public nombre: string,
    public precio: Cantidad,
    public cantidad: Cantidad,
    public secreto: boolean
  ){
    super( _id, nombre, precio, cantidad);
  }
}
