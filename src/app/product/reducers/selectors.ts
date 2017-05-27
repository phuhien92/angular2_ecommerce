import { Product } from './../../core/models/product';
import { AppState } from './../../interfaces';
import { ProductState } from './product-state';
import { createSelector } from 'reselect';
import { Map, List, fromJS } from 'immutable';

// Base product state selector function
export function getProductState(state: AppState): ProductState {
  return state.products;
}

export function fetchProducts(state:ProductState) {
    const ids = state.productIds.toJS();
    const productEntities = state.productEntities.toJS();
    return ids.map(id => productEntities[id]);
}

const fetchSelectedProduct = function (state): Product {
  return state.selectedProduct;
};

//**** PUBLIC API ****/
export const getProducts = createSelector(getProductState, fetchProducts);
