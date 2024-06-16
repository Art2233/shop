import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainPageRoutes } from './main-page/routes';

const routes : Routes = [
    ...MainPageRoutes,
    {
        path: '**',
        redirectTo: 'main',
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
