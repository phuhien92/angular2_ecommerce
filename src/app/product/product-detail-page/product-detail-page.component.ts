import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs/Subscription';
import { Observable } from 'rxjs/Observable';
import { Product } from './../../core/models/product';
import { ProductService } from './../../core/services/product.service';

@Component({
  selector: 'app-product-detail-page',
  templateUrl: './product-detail-page.component.html',
  styleUrls: ['./product-detail-page.component.scss']
})

export class ProductDetailPageComponent implements OnInit {
  actionsSubscription: Subscription;
  product$: Product = null;
  routeSubs: Subscription;
  productId: any;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {

  }
  ngOnInit() {
    this.actionsSubscription = this.route.params.subscribe(
      (params: any) => {
        this.productId = params['id'];
        this.productService
            .getProduct(this.productId)
            .subscribe((res) => {
              this.product$ = res;
              console.log(this.product$);
            });
      }
    )
  }
}
