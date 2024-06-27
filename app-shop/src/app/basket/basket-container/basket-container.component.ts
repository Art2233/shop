import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { IStore } from '../../reducer';
import { selectBasketProducts } from '../storage/reducer';
import { NavigatePageAction } from '../../app.actions';
import { IProduct } from '../../http/products.service';
import * as Actions from '../storage/actions';

@Component({
  selector: 'app-basket-container',
  templateUrl: './basket-container.component.html',
  styleUrl: './basket-container.component.scss'
})
export class BasketContainerComponent {

    basketProducts$ = this.store.select(selectBasketProducts);
    
    fullPrice = 0;
    d = this.store.select(selectBasketProducts).subscribe(res => {
        let newPrice = 0;
        res.forEach(i => newPrice += i.price);
        this.fullPrice = newPrice;
    })

    constructor (
        private store: Store<IStore>
    ) {}

    openItem(id: number) {

        this.store.dispatch(NavigatePageAction({ path: [ `products/${id}` ] }));
    }

    removeItemFromBasket(item: IProduct) {

        this.store.dispatch(Actions.RemoveItemFromBasketAction({ item }));
    }
}
