import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

// components
import { LoadingIndicatorComponent } from './components/loading-indicator/loading-indicator.component';

@NgModule({
  declarations: [
    LoadingIndicatorComponent
  ],
  exports: [
    LoadingIndicatorComponent,
    CommonModule
  ],
  imports: [
    CommonModule
  ]
})

export class SharedModule {};
