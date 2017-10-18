import { IPlatillo, IPedido } from '../interfaces/interfaces';
import { Precio, Cantidad, Sort } from './util';
import { Alimento, Variante } from './alimento';

export class Platillo extends Precio implements IPlatillo{
  public sort: Sort;

  constructor (
    public _id: string,
    public nombre: string,
    public precio: Cantidad,
    public categoria: string,
    public descripcion: string,

    public slogan?:string,
    public tags?:string[],
    public alimentos?: Alimento[],
    public alimentosExtras?: Alimento[],
    public variables?: Variante[],
    public tiempoEstimado?: number,
    public disponibilidad?: boolean,
    public popularidad?: number,
  ){
    super( _id, nombre, precio);
  }
}

export class Pedido extends Precio implements IPedido{
  platillo: Platillo;
  pagado: boolean = false;
  estado: number = 0;
}
