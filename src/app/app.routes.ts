import { Routes } from '@angular/router';
import { CarroslistComponent } from './components/carroslist/carroslist.component';
import { LoginComponent } from './components/login/login.component';
import { PrincipalComponent } from './components/principal/principal.component';
import { CarrosDetailsComponent } from './components/carros-details/carros-details.component';
import { MarcaslistComponent } from './components/marcaslist/marcaslist.component';
import { MarcasDetailsComponent } from './components/marcas-details/marcas-details.component';

export const routes: Routes = [
    {path:"", redirectTo:"login", pathMatch:'full'},
    {path:"login",component:LoginComponent},
    {path:"admin",component:PrincipalComponent,children:[
        {path:"carros",component:CarroslistComponent},
        {path:"carros/new",component:CarrosDetailsComponent},
        {path:"carros/edit/:id",component:CarrosDetailsComponent},

        {path:"marcas",component:MarcaslistComponent},
        {path:"marcas/new",component:MarcasDetailsComponent},
        {path:"carros/edit/:id",component:MarcasDetailsComponent}
    ]}
];
