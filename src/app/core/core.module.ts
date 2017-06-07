import { NgModule } from '@angular/core';
import { HttpModule, XHRBackend, RequestOptions, Http } from '@angular/http';

//services
import { ProductService } from './services/product.service';
import { HttpService } from './services/http';
import { ApiService } from './services/api.service';

import { EffectsModule } from '@ngrx/effects';
import { ProductEffects } from '../product/effects/product.effects';

export function httpInterceptor(
  backend: XHRBackend,
  defaultOptions: RequestOptions,
) {
  return new HttpService(backend, defaultOptions);
}

@NgModule({
  declarations: [
    // components
    // DummyService,
    // pipes
  ],
  exports: [
    // components
    // DummyService
  ],
  imports: [
    // Were not working on modules sice update to rc-5
    // TO BE moved to respective modules.
    EffectsModule.run(ProductEffects),
  ],
  providers: [
    ApiService,
    ProductService,
    HttpService,
    {
      provide: HttpService,
      useFactory: httpInterceptor,
      deps: [ XHRBackend, RequestOptions]
    }

  ]
})
export class CoreModule {}
