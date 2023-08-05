//Routing nos sirve para crear rutas (o endpoins)
//Los componentes deben exportarse en Shared para usarse aquí

import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { AboutPageComponent } from './shared/pages/about-page/about-page.component';
import { ContactPageComponent } from './shared/pages/contact-page/contact-page.component';

const routes: Routes=[
    // {
    // //         /home
    //     path: 'home',
    //     component: HomePageComponent
    // },
    {
    //         /about
        path:'about',
        component: AboutPageComponent
    },
    {
    //         /contact
        path:'contact',
        component: ContactPageComponent
    },
    {
        path: 'countries',
        loadChildren: ()=> import('./countries/countries.module').then(m => m.CountriesModule)
    },
    {
        //Si el path es cualquier otro se redirige a /countries
        path:'**',
        redirectTo: 'countries'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],

    providers: [],
})

export class AppRoutingModule{}