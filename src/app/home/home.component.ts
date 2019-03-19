import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../services/product-list.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public productlist = [];
  constructor(private _productListservice: ProductListService) { }

  ngOnInit() {
    // this.employees = this._employeeservice.getEmployees();
    this._productListservice.getProductList()
    .subscribe(data => this.productlist = data);
  }

}
