import { Injectable, signal } from "@angular/core";
import { Producto } from "../models/producto";

@Injectable(
    {providedIn:'root'}
)
export class ProductoServicio {
  readonly productos = signal<Producto[]>([]);
  private tempId  = 1; 
  guardar(producto: Omit<Producto, 'id'>, editar: number | null) {
    const lista = this.productos().slice();
    if (editar === null) {
        const nuevo : Producto = {
            id : this.tempId,
            nombre : producto.nombre,
            precio : producto.precio,
            categoria: producto.categoria,
            descripcion : producto.descripcion
        } 
        lista.push(nuevo);
        this.tempId++;
        console.log("nuevo");
    } else {
        console.log("editado");
    }
    this.productos.set(lista);    
    console.log(lista);
  }

}