import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { IStore } from "../../../reducer";
import { Store, on } from "@ngrx/store";
import * as BasketActions from '../actions';
import { concat, map, of, switchMap, withLatestFrom } from "rxjs";
import { selectBasketProducts } from "../reducer";
import { IProduct } from "../../../http/products.service";


@Injectable()
export class BasketEffects {

    constructor (
        private actions$: Actions,
        private store: Store<IStore>,
    ) {}

    addItemToBasket$ = createEffect(() => this.actions$.pipe(
        ofType(BasketActions.AddItemToBasketAction),
        withLatestFrom(this.store.select(selectBasketProducts)),
        switchMap(([{ item }, basketProducts]) => {

            const newBasketProducts = removeDuplicates([...basketProducts, {
                ...item,
                inBasket: true
            }])

            return concat(
                of({
                    basketProducts: newBasketProducts
                })
            );
        }),
        map(newState => BasketActions.ExtendStateAction({ newState })),
    ));

    removeItemFromBasket$ = createEffect(() => this.actions$.pipe(
        ofType(BasketActions.RemoveItemFromBasketAction),
        withLatestFrom(this.store.select(selectBasketProducts)),
        switchMap(([{ item }, basketProducts]) => {

            console.log(basketProducts.filter(i => i.id != item.id),);
            

            return concat(
                of({
                    basketProducts: basketProducts.filter(i => i.id != item.id),
                })
            );
        }),
        map(newState => BasketActions.ExtendStateAction({ newState })),
    ));
}

function removeDuplicates(arr: IProduct[]) {

    const seenIds: { [key: number]: boolean } = {};
    const result: IProduct[] = [];

    for (const item of arr) {
        if (!seenIds[item.id]) {
            seenIds[item.id] = true;
            result.push(item);
        }
    }

    return result;
}