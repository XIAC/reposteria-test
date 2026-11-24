import { Component } from '@angular/core';
import { ProductoIndividual } from '../../componente/producto-individual/producto-individual';

@Component({
  imports: [ProductoIndividual],
  selector: 'app-lista-productos',
  styleUrl: './lista-productos.css',
  templateUrl: './lista-productos.html',
})
export class ListaProductos {}
