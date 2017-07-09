import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import { AuthModule } from './auth/auth.module';
import { ProductModule } from './product/product.module';
// components
import { AppComponent } from './app.component';

//Routes
import { routes } from './app.routes';

// Modules
import { SharedModule } from './shared/shared.module';
import { CoreModule } from './core/core.module';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { StoreModule } from '@ngrx/store';
import { HomeModule } from './home/home.module';
import { LayoutModule } from './layout/index';
import { reducer } from './app.reducers';

// adding rx operators
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/finally';
import 'rxjs/add/observable/of';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    RouterModule.forRoot([], { useHash: true }),
    StoreModule.provideStore(reducer),
    StoreDevtoolsModule.instrumentOnlyWithExtension(),
    BrowserModule,
    FormsModule,
    HttpModule,
    CoreModule,
    HomeModule,
    SharedModule,
    LayoutModule,
    AuthModule,
    ProductModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
