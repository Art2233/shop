import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IState } from '../../app.reducer';
import { IStore } from '../../reducer';
import { InitAction } from '../storage/actions';
import * as Actions from '../storage/actions'
import { selectCategories, selectProducts } from '../storage/reducer';
import { NavigatePageAction } from '../../app.actions';
import { AddItemToBasketAction, RemoveItemFromBasketAction } from '../../basket/storage/actions';
import { IProduct } from '../../http/products.service';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit{

    products$ = this.store.select(selectProducts);
    categories$ = this.store.select(selectCategories);

    constructor (
        private store: Store<IStore>
    ) {}

    ngOnInit(): void {

        this.store.dispatch(InitAction());
    }

    openItem(id: number) {

        this.store.dispatch(NavigatePageAction({ path: [ `products/${id}` ] }));
    }

    addItems() {

        this.store.dispatch(Actions.AddItemsAction());
    }

    openCategoryProducts(category: string) {
        
        this.store.dispatch(Actions.CategoryProductsAction({ category }));
    }

    addItemToBasket(item: IProduct) {

        this.store.dispatch(AddItemToBasketAction({ item }));
        this.store.dispatch(Actions.AddItemToBasketProductAction({ item }));
    }

    removeItemFromBasket(item: IProduct) {

        this.store.dispatch(RemoveItemFromBasketAction({ item }));
        this.store.dispatch(Actions.RemoveItemFromBasketProductAction({ item }));
    }
}
