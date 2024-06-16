import { Component } from '@angular/core';
import { IStore } from '../reducer';
import { Store } from '@ngrx/store';
import { NavigatePageAction } from '../app.actions';

@Component({
    selector: 'app-header',
    templateUrl: './header.component.html',
    styleUrl: './header.component.scss'
})
export class HeaderComponent {

    constructor (
        private store: Store<IStore>
    ) {}

    goToShop() {

        this.store.dispatch(NavigatePageAction({ path: [`main`] }));
    }
}
