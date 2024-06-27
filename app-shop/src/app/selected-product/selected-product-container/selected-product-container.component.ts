import { Component, OnInit } from '@angular/core';
import { IStore } from '../../reducer';
import { Store } from '@ngrx/store';
import { ActivatedRoute } from '@angular/router';
import * as Actions from '../storege/actions';
import { selectCurrentProduct, selectRecommendation } from '../storege/reducer';
import { NgbRatingConfig } from '@ng-bootstrap/ng-bootstrap';
import { NavigatePageAction } from '../../app.actions';
import { IProduct } from '../../http/products.service';
import { AddItemToBasketAction, RemoveItemFromBasketAction } from '../../basket/storage/actions';
import { AddItemToBasketProductAction, RemoveItemFromBasketProductAction } from '../../main-page/storage/actions';

@Component({
  selector: 'app-selected-product-container',
  templateUrl: './selected-product-container.component.html',
  styleUrl: './selected-product-container.component.scss'
})
export class SelectedProductContainerComponent implements OnInit {

    currentProduct$ = this.store.select(selectCurrentProduct);
    recommendation$ = this.store.select(selectRecommendation);

    currentProduct: IProduct | null = null; //бред
    d = this.store.select(selectCurrentProduct).subscribe(res => {
        this.currentProduct = res
    });

    constructor (
        private store: Store<IStore>,
        private activatedRoute: ActivatedRoute,
        public rating: NgbRatingConfig,
    ) {
        rating.max = 5;
        rating.readonly = true;
    }

    ngOnInit(): void {

        this.activatedRoute.params.subscribe(params => {

            const id = params['id'];

            this.store.dispatch(Actions.SelecteCurrentProductAction({ id }));
        });
    }

    openItem(id: number) {

        this.store.dispatch(NavigatePageAction({ path: [ `products/${id}` ] }));
    }

    addItemToBasket() {

        this.store.dispatch(AddItemToBasketAction({ item: this.currentProduct! }));
        this.store.dispatch(AddItemToBasketProductAction({ item: this.currentProduct! }));

        //bred
        this.store.dispatch(Actions.ExtendStateAction({
            newState: {
                currentProduct: {
                    ...this.currentProduct!,
                    inBasket: true 
                }
            }
        }));
    }

    removeItemFromBasket() {

        this.store.dispatch(RemoveItemFromBasketAction({ item: this.currentProduct! }));
        this.store.dispatch(Actions.AddItemToBasketProductAction({ item: this.currentProduct! }));

        //tozhe bred
        this.store.dispatch(Actions.ExtendStateAction({
            newState: {
                currentProduct: {
                    ...this.currentProduct!,
                    inBasket: false 
                }
            }
        }));
    }

    addItemToBasketProduct(item: IProduct) {

        this.store.dispatch(AddItemToBasketAction({ item }));
        this.store.dispatch(AddItemToBasketProductAction({ item }));
    }

    removeItemFromBasketProduct(item: IProduct) {

        this.store.dispatch(RemoveItemFromBasketAction({ item }));
        this.store.dispatch(Actions.RemoveItemFromBasketProductAction({ item }));
    }
}
