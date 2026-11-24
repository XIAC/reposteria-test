import { Component } from '@angular/core';
import { Encabezado } from '../encabezado/encabezado';
import { MenuNavegacion } from '../menu-navegacion/menu-navegacion';
import { PiePagina } from '../pie-pagina/pie-pagina';
import { RouterOutlet } from '@angular/router';

@Component({
  imports: [RouterOutlet,Encabezado,MenuNavegacion,PiePagina],
  selector: 'app-principal',
  styleUrl: './principal.css',
  templateUrl: './principal.html',
})
export class Principal {}
