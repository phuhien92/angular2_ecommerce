import { Product } from './../../core/models/product';
import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-content',
    templateUrl: './content.component.html'
})

export class ContentComponent implements OnInit {
    @Input() products: Product[];

    constructor(

    ) {
        console.log(this.products)
    }

    ngOnInit() {}


}