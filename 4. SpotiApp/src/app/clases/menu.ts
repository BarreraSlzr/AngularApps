import { IMenu, IMenuMaster } from '../interfaces/interfaces';
import { Platillo } from './platillo';
import { FechaCreacion } from './util';

export class Menu extends FechaCreacion implements IMenu{
  platillos: Platillo[];
  hrInicio: number;
  hrFinalizacion: number;
  categoria: string;
  descripcion: string;
  slogan: string;
}

export class MenuMaster extends FechaCreacion implements IMenuMaster{
  menus: Menu[];
}
