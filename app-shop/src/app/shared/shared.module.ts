import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppContainerComponent } from './app-container/app-container.component';



@NgModule({
  declarations: [
    AppContainerComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet
  ],
  exports: [
    CommonModule,
    RouterOutlet,
    AppContainerComponent
  ]
})
export class SharedModule { }
