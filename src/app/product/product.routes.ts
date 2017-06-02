import { Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';

export const ProductRoutes: Routes = [
    { path: '', component: ProductComponent, pathMatch: 'full' },
    {
      path: ':id',
      component: ProductDetailPageComponent
    }
]
