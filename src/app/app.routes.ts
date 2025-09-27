import { Routes } from '@angular/router';
import { ListadoApod } from './listado-apod/listado-apod';
import { DetalleApod } from './detalle-apod/detalle-apod';

export const routes: Routes = [
   { path: '', component: ListadoApod },
    { path: 'listado-apod', component: ListadoApod },
    { path: 'detalle-apod/:date', component: DetalleApod }
];