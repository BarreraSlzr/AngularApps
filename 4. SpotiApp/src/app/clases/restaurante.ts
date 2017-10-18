import { Platillo, Pedido } from './platillo';
import { Comanda } from './comanda';
import { MenuMaster } from './menu';

export class restaurante{
  platillos: Platillo[];
  ordenes: Pedido[];
  menu: MenuMaster;
  comandas: Comanda[];
}
