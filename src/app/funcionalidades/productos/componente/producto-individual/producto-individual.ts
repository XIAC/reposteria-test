import { Component, input, output } from '@angular/core';
import { Producto } from '../../models/producto';
import { DecimalPipe } from '@angular/common';

@Component({
  imports: [ DecimalPipe],
  selector: 'item-producto',
  styleUrl: './producto-individual.css',
  templateUrl: './producto-individual.html',
})
export class ProductoIndividual {
    producto = input.required<Producto>();
    editar = output<Producto>();
    eliminar = output<Producto>();
}
