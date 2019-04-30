import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Product } from 'src/app/models/Product';
import { MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  dataSource: MatTableDataSource<Product>;
  columnNames = ['id', 'product_name', 'product_description'];
// tslint:disable-next-line: variable-name
  constructor(private _productsService: ProductsService) {
    
  }

  ngOnInit() {
    this._productsService.getProducts().subscribe(
      (products: Product[]) => {
        this.dataSource = new MatTableDataSource<Product>(products);
      }
    );
  }

}
