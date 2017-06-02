import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
// import { CanActivateViaAuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
      path: '',
      loadChildren: './home/home.module'
    },
    {
      path: 'user',
      loadChildren: './user/user.module',
      // canActivate: [CanActivateViaAuthGuard]
    },
    {
      path: 'auth',
      loadChildren: './auth/auth.module'
    },
    {
      path: 'product',
      loadChildren: './product/product.module'
    }
]
