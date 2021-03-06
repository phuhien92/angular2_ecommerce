import { environment } from './../../environments/environment';
import { ProductActions } from './../product/actions/product-actions';
import { AppState } from './../interfaces';
import { getProducts } from './../product/reducers/selectors';
import { Observable } from 'rxjs/Observable';
import { Store } from '@ngrx/store';
import { Component, OnInit, OnChanges } from '@angular/core';
import { ProductService } from './../core/services/product.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {
  products$: Observable<any>;

  constructor(
    private store: Store<AppState>,
    private actions: ProductActions,
    private productService: ProductService
  ) {
    // this.store.subscribe(() => console.info("Home Component Store changed", this.store));
    // this.store.dispatch(this.actions.getAllProducts());
    // this.products$ = this.store.select(getProducts);
    // this.productService.getProducts()
    // this.productService.getProducts().subscribe((data) => {
    //   console.info(data)
    //   this.products$ = data;
    // })
    this.productService.getProducts().subscribe(products => this.products$ = products);
  }

  ngOnInit() {

  }
}
