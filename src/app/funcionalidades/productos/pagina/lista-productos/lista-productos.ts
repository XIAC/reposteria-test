import { Component, inject, signal } from '@angular/core';
import { ProductoIndividual } from '../../componente/producto-individual/producto-individual';
import { ProductoServicio } from '../../servicios/producto.services';
import { FormsModule, NgForm } from '@angular/forms';
import { Producto } from '../../models/producto';

type DatosProducto = Pick<Producto, 'nombre' | 'categoria' | 'precio' | 'descripcion'>;
@Component({
  imports: [ FormsModule],
  selector: 'app-lista-productos',
  styleUrl: './lista-productos.css',
  templateUrl: './lista-productos.html',
})
export class ListaProductos {
    formVacio() {
      return  {
        nombre: '',
        categoria: '',
        precio : null,
        descripcion:''
      }
    }
    private readonly servicioProducto = inject(ProductoServicio);
    datos = this.formVacio();
    editar : number | null = null;
    busqueda : string =  '';
    readonly mensaje = signal ('');
    async guardarProducto(form : NgForm){
      if (form.invalid) {
        return
      }
      if (this.datos.precio === null){
        return;
      }
      const producto: DatosProducto = {
        nombre: this.datos.nombre,
        categoria : this.datos.categoria,
        precio: this.datos.precio,
        descripcion: this.datos.descripcion
      }
      try {
        await this.servicioProducto.guardar(producto, this.editar);
        this.limpiar(form);
        this.mensaje.set('Se guardo correctamente');
      } catch (error) {
        console.log(error);
        this.mensaje.set('Error.....');
      }
      console.log("se guardo correctamente");
    }

  limpiar(form: NgForm) {
    this.editar = null;
    this.datos = this.formVacio();
    form.resetForm(this.datos);
  }

  editarProducto(){
    console.log("editar producto");
  }
  eliminarProducto(){
    console.log("elimian producto");
  }
  listaProductos(){

  }
}
