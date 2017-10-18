import { IComanda, IComandaPrincipal, IComandaDiv } from '../interfaces/interfaces';
import { Precio, Cantidad } from './util';
import { Pedido } from './platillo';

export class Comanda extends Precio implements IComanda{

  public pedidos: Pedido[];
  public propinaPagada: Cantidad;

  constructor(
    public _id:string,
    public nombre:string
  ){
    super(_id, nombre, precio);
  }

  precio(): Cantidad{
    let precioTotal: Cantidad;

    for (let pedido of this.pedidos) {
      precioTotal.cantidad += pedido.precio.cantidad
    }

    return precioTotal;
  }
  agregar( pedido: Pedido ){
    this.pedidos.push( pedido );
  }

  quitar( indexPedido: number ): boolean{
    if (this.pedidos.splice( indexPedido )){
      return true;
    }
  }

  pagar( indexPedido: number ){
    this.pedidos[ indexPedido ].pagado = true;
  }

  calcularPropina( cantidadPagar: number, propinaPorcentaje: number = 15): number{
    cantidadPagar *= (propinaPorcentaje/100);
    return cantidadPagar;
  }

  pedidosAdeudados(): Pedido[]{
    let pedidosAdeudados: Pedido[];

    for (let pedido of this.pedidos) {
      if( !pedido.pagado ){
        pedidosAdeudados.push( pedido );
      }
    }
    return pedidosAdeudados;
  }

  pagarPropina( cantidadPagar: number, propinaPorcentaje: number = 15): boolean{
    this.propinaPagada.cantidad += this.calcularPropina( cantidadPagar, propinaPorcentaje);
    return true;
  }

  cerrarComanda(): boolean{
    if ( this.adeudo().cantidad <= 0 ){
      return true;
    }
    return false;
  }

  calcularPrecio( pedidos: Pedido[] ): Cantidad{
    let precioPagar: Cantidad;

    pedidos.forEach(
      ( pedido ) => {
        precioPagar.cantidad += pedido.precio.cantidad;
      }
    );

    return precioPagar;
  }

  adeudo(): Cantidad{
    let precioPagar: Cantidad;

    this.pedidos.forEach(
      ( pedido ) => {
        if( !pedido.pagado ){
          precioPagar.cantidad += pedido.precio.cantidad;
        }
      }
    );

    return precioPagar;
  }

  dividirComanda( pedidos: Pedido[]){
    let nuevaComanda: ComandaDividida;
    let id: string;

    do{
      id = Math.random().toString();
    }
    while(
      this.subComandas.findIndex(
        ( comandas ): boolean =>{
      return comandas._id != id ? true : false
    }
  ))

    nuevaComanda = new ComandaDividida( this._id, this.nombre, this.calcularPrecio( pedidos ), pedidos, this._id);
    this.subComandas.push( nuevaComanda );
  }
}

export class ComandaDividida extends Comanda implements IComandaDiv {

  constructor (
    public _idPadre: string,
    public nombre:string,
    public precio: Cantidad = new Cantidad(0, 0),,
    public pedidos: Pedido[],
    public _id: string;
  ){
      super( _id, nombre, precio);
    }
}
