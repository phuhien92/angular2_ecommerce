import { Observable } from 'rxjs/Observable';
import { AppState } from './../../../interfaces';
import { Store } from '@ngrx/store';
import { environment } from './../../../../environments/environment';
import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})

export class ProductListComponent implements OnInit {
    @Input() products;

    constructor(
        private store: Store<AppState>
    ) {
        console.log(this.products)
    }

    ngOnInit() {}

    getProductImageUrl(url) {
        return environment.API_ENDPOINT + url;
    }
}