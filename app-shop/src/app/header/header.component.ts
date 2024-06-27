import { Component } from '@angular/core';
import { IStore } from '../reducer';
import { Store } from '@ngrx/store';
import { NavigatePageAction } from '../app.actions';
import { selectBasketProducts } from '../basket/storage/reducer';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

    basketProducts$ = this.store.select(selectBasketProducts);

    constructor (
        private store: Store<IStore>
    ) {}

    goToShop() {

        this.store.dispatch(NavigatePageAction({ path: [`main`] }));
    }

    gotToBasket() {
        
        this.store.dispatch(NavigatePageAction({ path: [`basket`] }));
    }
}
