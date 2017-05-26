import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ProductActions } from './../product/actions/product-actions';

// Components
import { HomeComponent } from './home.component';
import { ContentComponent } from './content/content.component';
import { ProductListComponent } from './content/product-list/product-list.component';

// Routes
import { HomeRoutes as routes } from './home.routes';

@NgModule({
    declarations: [
        HomeComponent,
        ContentComponent,
        ProductListComponent
    ],
    exports: [],
    imports: [
        RouterModule.forChild(routes),
        CommonModule
    ],
    providers: [
        ProductActions
    ]
})

export class HomeModule {}
