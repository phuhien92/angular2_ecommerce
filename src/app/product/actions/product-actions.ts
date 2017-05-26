import { Product } from './../../core/models/product';
import { Action } from '@ngrx/store';

export class ProductActions {
    static GET_ALL_PRODUCTS = "GET_ALL_PRODUCTS";
    static GET_ALL_PRODUCTS_SUCCESS = "GET_ALL_PRODUCTS_SUCCESS";

    getAllProducts(): Action {
        return { type: ProductActions.GET_ALL_PRODUCTS }
    }

    getAllProductsSuccess(products: any): Action {
        console.log(ProductActions.GET_ALL_PRODUCTS_SUCCESS, products)
        return {
            type: ProductActions.GET_ALL_PRODUCTS_SUCCESS,
            payload: products
        }
    }
}
