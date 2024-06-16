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
import { mainPageEffects as MainPageEffects } from './main-page/storage/effects';

const modules = [
    HeaderModule,
    MainPageModule
];

const EFFECTS = [
    AppEffects,
    ...MainPageEffects
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
        StoreModule.forRoot({}, {}),
        EffectsModule.forRoot(EFFECTS),
        StoreRouterConnectingModule.forRoot(),
    ],
    bootstrap: [ AppComponent ]
})
export class AppModule { }
