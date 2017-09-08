import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { ProductfilterPipe } from '../productfilter.pipe';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
  providers: [ProductService]
})
export class ProductsComponent implements OnInit {
  productList = []
  constructor(private productservice: ProductService) {}
  ngOnInit() {
    this.productservice.getProductList()
      .subscribe(responseData => this.productList = responseData);
    }
}
