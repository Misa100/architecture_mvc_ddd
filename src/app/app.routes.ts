import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import {ProductComponent} from './MVC/product/product.component'
import { ProductDddComponent } from './DDD/product-ddd/product-ddd.component';

export const routes: Routes = [
    {path:'', component:AppComponent},
    {path:'product_mvc', component:ProductComponent},
    {path:'product_ddd', component:ProductDddComponent}
];
