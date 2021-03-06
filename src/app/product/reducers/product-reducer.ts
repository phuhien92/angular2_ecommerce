import { Product } from './../../core/models/product';
import { ProductActions } from './../actions/product-actions';
import { ProductState, ProductStateRecord } from './product-state';
import { Action, ActionReducer } from '@ngrx/store';

export const initialState: ProductState = new ProductStateRecord() as ProductState;

export const productReducer: ActionReducer<ProductState> = (state: ProductState = initialState, { type, payload }: Action): ProductState => {
    switch (type) {
        case ProductActions.GET_ALL_PRODUCTS_SUCCESS:
            const _products: Product[] = payload.products.products;
            const productIds: number[] = _products.map(product => product.id);
            const productEntities = _products.reduce((products: { [id: number]: Product }, product: Product) => {
                return Object.assign(products, {
                [product.id]: product
                });
            }, { });
            return state.merge({
                productIds: productIds,
                productEntities: productEntities
            }) as ProductState;

        default:
            return state;
    }
}