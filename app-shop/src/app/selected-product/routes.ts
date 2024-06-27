import { Injectable } from "@angular/core";
import { Routes } from "@angular/router";
import { SelectedProductContainerComponent } from "./selected-product-container/selected-product-container.component";


export const SelectedProductRoutes: Routes = [{
        path: 'products/:id',
        component: SelectedProductContainerComponent,
}]