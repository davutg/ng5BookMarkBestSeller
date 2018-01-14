import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {PageNotFoundComponent} from './page-not-found/page-not-found.component';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
    {
        path:'',
        component:HomeComponent
    },
        {
        path:'about',
        component:AboutComponent,
        data:{ext:'123'}
    },
    {
        path:'cart',
        component:CartComponent
    },
  { path: '**', component: PageNotFoundComponent }
    
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
