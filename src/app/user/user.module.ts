import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';



//components
import { UserComponent } from './user.component';
import { SharedModule } from '../shared/shared.module';

//services
import { UserRoutes as routes } from './user.routes';

@NgModule({
    //components
    declarations: [
        UserComponent
        
    ],
    exports: [

    ],
    providers: [],
    imports: [
        RouterModule.forChild(routes),
        SharedModule
    ]
})

export class UserModule {}
