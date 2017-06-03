import { Observable } from 'rxjs/Observable';
import { HttpService } from './http';
import { Injectable } from '@angular/core';

@Injectable()
export class ProductService {
    constructor(private http: HttpService) {

    }

    getProducts(): any {
        return this.http.get('/spree/api/v1/products')
        .map(res => res.json());
    }

    getProduct(id: string): Observable<any> {
      return this.http.get('/spree/api/v1/products/'+id)
      .map(res => res.json());
    }
}
