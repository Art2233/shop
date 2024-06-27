import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppContainerComponent } from './app-container/app-container.component';
import { NgbRatingConfig, NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    AppContainerComponent
  ],
  imports: [
    CommonModule,
    RouterOutlet,
    NgbRatingModule
  ],
  exports: [
    CommonModule,
    RouterOutlet,
    AppContainerComponent,
    NgbRatingModule
  ]
})
export class SharedModule { }
