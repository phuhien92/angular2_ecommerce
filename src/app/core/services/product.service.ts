import { Observable } from 'rxjs/Observable';
import { HttpService } from './http';
import { ApiService } from './api.service';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
    constructor(
      // private http: HttpService,
      private http: ApiService
    ) {

    }

    getProducts(): any {
      console.log("get products")
      return this.http.get('/spree/api/v1/products')
      .map(res => res.products);
    }

    getProduct(id: string): Observable<any> {
      return this.http.get('/spree/api/v1/products/'+id)
    }
}
