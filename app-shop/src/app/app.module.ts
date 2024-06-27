import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './header/header.component';
import { HeaderModule } from './header/header.module';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { AppEffects } from './app.effect';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { MainPageModule } from './main-page/main-page.module';
import { HttpModule } from './http/http.module';
import { mainPageEffects } from './main-page/storage/effects';
import { Reducer } from './reducer';
import { SelectedProductModule } from './selected-product/selected-product.module';
import { selectedProcutEffects } from './selected-product/storege/effects';
import { BasketModule } from './basket/basket.module';
import { basketEffects } from './basket/storage/effects';

const modules = [
    HeaderModule,
    MainPageModule,
    SelectedProductModule,
    BasketModule
];

const EFFECTS = [
    AppEffects,
    ...mainPageEffects,
    ...selectedProcutEffects,
    ...basketEffects
];

@NgModule({
    declarations: [
        AppComponent,
    ],
    imports: [
        ...modules,
        CommonModule,
        BrowserModule,
        AppRoutingModule,
        HttpModule,
        NgbModule,
        SharedModule,
        StoreModule.forRoot(Reducer),
        EffectsModule.forRoot(EFFECTS),
        StoreRouterConnectingModule.forRoot(),
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
