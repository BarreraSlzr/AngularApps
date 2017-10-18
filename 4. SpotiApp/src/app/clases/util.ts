import { ICantidad, INombre, IiD, IFechaCreacion, IPrecio, IStock, ICategorias, ICategoria } from '../interfaces/interfaces';

// CLASES

export class ID implements IiD {
  constructor (
    public _id: string
  ){}
}

export class Nombre extends ID implements INombre{
  constructor (
    public _id: string,
    public nombre: string){
    super(_id);
  };
}

export class FechaCreacion extends Nombre implements IFechaCreacion {
  fechaCreacion: Date;
  constructor(
    public _id: string,
    public nombre: string
  ){
    super( _id, nombre);
    this.fechaCreacion = new Date();
  }
}

export class Cantidad implements ICantidad {

  constructor(
    public cantidad: number,
    public decimales: number = 0
  ){
  }

  add( num:number ){
    this.cantidad+= num;
  }

  rest( num:number){
    this.cantidad-= num;
  }
}

export class Precio extends FechaCreacion implements IPrecio{
  constructor (
    public _id: string,
    public nombre: string,
    public precio: Cantidad
  ){
    super( _id, nombre);
  }
}

export class Stock extends Precio implements IStock {
  constructor(
    public _id: string,
    public nombre: string,
    public precio: Cantidad,
    public cantidad: Cantidad
  ){
    super( _id, nombre, precio );
  }
}

export class Categoria extends Nombre implements ICategoria{
}

export class Sort{
  alfabeticamente( array:INombre[] ){
    array.sort(
    (izq, der): number => {
      if(izq.nombre > der.nombre) return -1;
      if(izq.nombre < der.nombre) return 1;
      return 0;
    })
  }
}

export class Categorias extends Nombre implements ICategorias{
  public sort: Sort;

  constructor(
    public _id,
    public nombre,
    public categorias: Categoria[]
  ){
    super(_id, nombre);
    this.sort.alfabeticamente( categorias );
  }
  buscar( nombre: string ): number {
    let noEncontrado:number = -1;
    for (let i = 0; i < this.categorias.length; i++) {
        if(this.categorias[i].nombre == nombre){
          return i;
        };
    }
    return noEncontrado;
  }

  agregar( nombre: string ): boolean{
    if( this.buscar( nombre ) < 0 ){
      this.categorias.push( new Categoria( nombre, `${this.categorias.length}` ) );
      this.sort.alfabeticamente( this.categorias );
      return true;
    } else {
      return false;
    }
  }

  quitar( categoriaID:number, categoriaNombre: string ): boolean{
    if ( this.buscar( categoriaNombre ) == categoriaID ){
      this.categorias.splice( categoriaID );
      return true;
    } else {
      return false;
    }
  }
}
