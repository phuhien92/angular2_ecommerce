import { NgModule } from '@angular/core';

import { RouterModule } from '@angular/router';

// For Temp Puropose
// TODO: Remove this from here
import { ProductService } from './../core/services/product.service';

// Components
import { ProductComponent } from './product.component';

// Routes
import { ProductRoutes as routes } from './product.routes';

// Effects
import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from './effects/product.effects';


@NgModule({
  declarations: [
    // components
    ProductComponent,
    
    // pipes
  ],
  exports: [
    // components
    
  ],
  imports: [
    RouterModule.forChild(routes),
  ],
  providers: [
  ]
})
export class ProductModule {}