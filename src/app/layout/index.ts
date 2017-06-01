import { NgModule } from '@angular/core';

// Components
import { HeaderComponent } from './header/header.component';
// import { FooterComponent } from './footer/footer.component';

// Modules
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        HeaderComponent,
        // FooterComponent,
    ],
    exports: [
        HeaderComponent,
        // FooterComponent
    ],
    imports: [
        SharedModule,
        RouterModule
    ]
})

export class LayoutModule {}