import { RouterModule, Routes } from '@angular/router';
// import { CanActivateViaAuthGuard } from './core/guards/auth.guard';

export const routes: Routes = [
    {
        path: '', 
        loadChildren: './home/home.module#HomeModule'
    },
]