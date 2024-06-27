import { NgModule } from '@angular/core';
import { CategoriesComponent } from './main-page-container/categories/categories.component';
import { MainPageComponent } from './main-page-container/main-page.component';
import { SharedModule } from '../shared/shared.module';
import { ProductsComponent } from './main-page-container/products/products.component';



@NgModule({
  declarations: [
    MainPageComponent,
    CategoriesComponent,
    ProductsComponent,
  ],
  imports: [
    SharedModule
  ],
  exports: [
    ProductsComponent
  ]
})
export class MainPageModule { }
