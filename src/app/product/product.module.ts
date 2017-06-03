import { NgModule, ModuleWithProviders } from '@angular/core';

import { RouterModule } from '@angular/router';

import { ProductService } from './../core/services/product.service';

// Components
import { ProductComponent } from './product.component';
import { ProductDetailPageComponent } from './product-detail-page/product-detail-page.component';

// Effects
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './effects/product.effects';

const productRouting: ModuleWithProviders = RouterModule.forChild([
  {
    path: 'product/:id',
    component: ProductDetailPageComponent,
    pathMatch: 'full'
  }
]);

@NgModule({
  imports: [
    productRouting,
  ],
  declarations: [
    // components
    ProductComponent,
    ProductDetailPageComponent
    // pipes
  ],
  exports: [
    // components
    ProductDetailPageComponent
  ],

  providers: [
  ]
})
export class ProductModule {}
