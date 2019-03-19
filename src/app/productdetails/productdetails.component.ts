import { Component, OnInit } from '@angular/core';
import { ProductListService } from '../services/product-list.service';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-productdetails',
  templateUrl: './productdetails.component.html',
  styleUrls: ['./productdetails.component.css']
})
export class ProductdetailsComponent implements OnInit {
  id: number;
  private sub: any;
  qid;

  public productlist = [];
  constructor(private router: Router, private route: ActivatedRoute, private _productListservice: ProductListService) { }

  ngOnInit() {
    // this.employees = this._employeeservice.getEmployees();
    this._productListservice.getProductList()
    .subscribe(data => this.productlist = data);

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      // In a real app: dispatch action to load the details here.

    });

  var url = this.router.url;
  var quid = url.substring(url.lastIndexOf('/')+1);
  this.qid = quid;
  console.log(this.qid);

  }

}
