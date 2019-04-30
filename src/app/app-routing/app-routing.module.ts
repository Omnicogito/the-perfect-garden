import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from '../components/about/about.component';
import { HttpClientModule, HttpHeaders, HttpClient } from '@angular/common/http';

const routes: Routes = [
        {
            path: '',
            component: AboutComponent,
        },
    ];

@NgModule({
        imports: [
            RouterModule.forRoot(routes)
        ],
        exports: [
            RouterModule
        ],
        declarations: []
    })
    export class AppRoutingModule { }
