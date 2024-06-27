import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectedProductContainerComponent } from './selected-product-container/selected-product-container.component';
import { SharedModule } from '../shared/shared.module';
import { NgbRatingModule } from '@ng-bootstrap/ng-bootstrap';
import { MainPageModule } from '../main-page/main-page.module';



@NgModule({
    declarations: [
        SelectedProductContainerComponent
    ],
    imports: [
        CommonModule,
        SharedModule,
        MainPageModule
    ]
})
export class SelectedProductModule { }
