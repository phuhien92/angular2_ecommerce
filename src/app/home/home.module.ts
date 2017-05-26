import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { ProductActions } from './../product/actions/product-actions';

// Components
import { HomeComponent } from './home.component';
import { ContentComponent } from './content/content.component'; 

// Routes
import { HomeRoutes as routes } from './home.routes';

@NgModule({
    declarations: [
        HomeComponent,
        ContentComponent
    ],
    exports: [],
    imports: [
        RouterModule.forChild(routes)
    ],
    providers: [
        ProductActions
    ]
})

export class HomeModule {}