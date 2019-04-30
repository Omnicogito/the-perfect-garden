import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { MatButtonModule } from '@angular/material/';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutComponent } from './components/about/about.component';
import { MatToolbarModule } from '@angular/material';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { ProductsComponent } from './components/products/products.component';
// tslint:disable-next-line: max-line-length
import { ThePerfectGardenDetailComponent } from './components/the-perfect-garden/the-perfect-garden-detail/the-perfect-garden-detail.component';
import { ProductsService } from './services/products.service';
import { RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material';


// const routes = [
//   {path: 'products', component: ProductsComponent},
//  ]




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ProductsComponent,
    HomeComponent,
    ThePerfectGardenDetailComponent
  ],
  imports: [
    BrowserModule,
    MatToolbarModule,
    MatButtonModule,
    ReactiveFormsModule,
    AppRoutingModule,
    MatTableModule,
    HttpClientModule,
    RouterModule
  ],

  providers: [
    ProductsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
