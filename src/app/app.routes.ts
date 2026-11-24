import { Routes } from '@angular/router';
import { Principal } from './estructura/principal/principal';
import { Inicio } from './funcionalidades/inicio/pagina/inicio/inicio';
import { ListaProductos } from './funcionalidades/productos/pagina/lista-productos/lista-productos';
import { ListaPedidos } from './funcionalidades/pedidos/pagina/lista-pedidos/lista-pedidos';

export const routes: Routes = [
    {
        path: '',
        component: Principal,
        children : [
            {path:'inicio', component: Inicio},
            {path:'productos', component: ListaProductos},
            {path:'pedidos', component: ListaPedidos}
        ]
    }];
