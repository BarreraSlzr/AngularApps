
export interface IiD{
  _id: string;
}

export interface INombre extends IiD{
  nombre: string;
}

export interface IFechaCreacion extends INombre{
  fechaCreacion:Date;
}

export interface IPrecio extends IFechaCreacion{
  precio: ICantidad;
}

export interface ICantidad{
  cantidad:number;
  decimales:number;

  add( num:number );
  rest( num:number);
}

export interface ICategoria extends INombre{

}

export interface ICategorias{
  categorias: ICategoria[];
  buscar( nombre: string ): number;
  agregar( nombre: string ): boolean;
  quitar( idCategoria:number, categoria: string ): boolean;
}

export interface IMenuMaster extends IFechaCreacion{
  menus: IMenu[];
}

export interface IMenu extends IFechaCreacion{
  platillos: IPlatillo[];
  hrInicio: number;
  hrFinalizacion: number;
  categoria: string;
  descripcion: string;
  slogan: string;
}

export interface IComanda extends IFechaCreacion{
  pedidos: IPedido[];
  adeudo(): ICantidad;
  precio(): ICantidad;
  agregar( pedido: IPedido );
  quitar( indexPedido: number ): boolean;
  pagar( indexPedido: number ): boolean;
  cerrarComanda();
}

export interface IComandaPrincipal extends IComanda{
  subComandas: Comanda[]
  dividirComanda( pedidos: IPedido[]);
}

export interface IComandaDiv extends IComanda{
  _idPadre: string;
}

export interface IPedido extends IFechaCreacion{
  platillo: IPlatillo;
  estado: number;
  pagado: boolean;

  pagar();
  cambiarEstado( extado: number);
}

export interface IPlatillo extends IPrecio{
  categoria: string;
  descripcion: string;
  slogan?: string;
  tags?: string[];
  alimentos?: IAlimento[];
  alimentosExtras?: IAlimento[];
  variables?: IVariante[];
  tiempoEstimado?: number;
  disponibilidad?: boolean;
  popularidad?: number;
}

export interface IAlimento extends INombre{
  ingredientes: IIngrediente[];
}

export interface IVariante extends IAlimento{
  idAlimentoPrincipal: string;
}

export interface IIngrediente extends IStock{
  secreto: boolean;
}
export interface IStock extends IFechaCreacion{
  cantidad: ICantidad;
}
export interface ICostos extends IStock{
}
