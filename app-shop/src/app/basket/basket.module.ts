import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasketContainerComponent } from './basket-container/basket-container.component';
import { MainPageModule } from '../main-page/main-page.module';



@NgModule({
  declarations: [
    BasketContainerComponent
  ],
  imports: [
    CommonModule,
    MainPageModule
  ]
})
export class BasketModule { }
