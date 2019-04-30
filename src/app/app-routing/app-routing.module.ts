import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';
import { ProductsComponent } from '../components/products/products.component';

const routes: Routes = [
        {
            path: 'products', component: ProductsComponent,

        },
        {
            path: '',
            component: AboutComponent,
        },
    ];

@NgModule({
        imports: [
            RouterModule.forRoot(routes),
            ProductsComponent
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
