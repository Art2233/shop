import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageRoutes } from './main-page/routes';
import { SelectedProductRoutes } from './selected-product/routes';
import { BasketRoutes } from './basket/routes';

const routes : Routes = [
    ...MainPageRoutes,
    ...SelectedProductRoutes,
    ...BasketRoutes,
    {
        path: '**',
        redirectTo: 'products',
    }
];

@NgModule({
    imports: [RouterModule.forRoot(
        routes,
        {
            paramsInheritanceStrategy: 'always'
        }
    )],
    exports: [RouterModule]
})
export class AppRoutingModule { }
