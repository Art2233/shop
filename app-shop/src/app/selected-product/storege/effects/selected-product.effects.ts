import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { ProductsService } from "../../../http/products.service";
import * as SelectedProductActions from '../actions';
import { concat, map, of, switchMap, withLatestFrom } from "rxjs";
import { IStore } from "../../../reducer";
import { selectRecommendation } from "../reducer";
import { selectProducts } from "../../../main-page/storage/reducer";
import { selectBasketProducts } from "../../../basket/storage/reducer";

@Injectable()
export class SelectedProductEffects {

    constructor (
        private actions$: Actions,
        private store: Store<IStore>,
        private productsService: ProductsService
    ) {}

    $selectCurrentProduct = createEffect(() => this.actions$.pipe(
        ofType(SelectedProductActions.SelecteCurrentProductAction),
        withLatestFrom(
            this.store.select(selectProducts),
            this.store.select(selectBasketProducts),
        ),
        switchMap(([{ id }, products, basket]) => {

            const currentProduct$ = this.productsService.getProductById(id).pipe(
                map(res => {

                    return res
                }),
                switchMap(res => {

                    return this.productsService.getCategoryProducts(res.category).pipe(
                        map(recommendation => {

                            return {
                                recommendation: recommendation
                                    .filter(i => i.id != res.id)
                                    .map(i => ({
                                        ...i,
                                        inBasket: basket.filter(p => p.id == i.id)[0]?.inBasket ?? false
                                    })),
                                currentProduct: products.length
                                    ? products.filter(i => i.id == id)[0]
                                    : res,
                            }
                        }),
                    );
                }),
            )

            return concat(
                of({ currentProduct: null }),
                currentProduct$
            );
        }),
        map(newState => SelectedProductActions.ExtendStateAction({ newState })),
    ));

    addItemInBasket$ = createEffect(() => this.actions$.pipe(
        ofType(SelectedProductActions.AddItemToBasketProductAction),
        withLatestFrom(this.store.select(selectRecommendation)),
        switchMap(([{ item }, recommendation]) => {

            const newRecommendation = recommendation
                .reduce((akk: any, i: any) => {

                    if (i.id == item.id) {

                        return [...akk, {
                            ...i,
                            inBasket: true
                        }]
                    }

                    return [...akk, i];
                }, [])

            return concat(
                of({
                    recommendation: newRecommendation
                })
            );
        }),
        map(newState => SelectedProductActions.ExtendStateAction({ newState })),
    ));

    removeItemFromBasket$ = createEffect(() => this.actions$.pipe(
        ofType(SelectedProductActions.RemoveItemFromBasketProductAction),
        withLatestFrom(this.store.select(selectRecommendation)),
        switchMap(([{ item }, recommendation]) => {

            const newRecommendation = recommendation
                .reduce((akk: any, i: any) => {

                    if (i.id == item.id) {

                        return [...akk, {
                            ...i,
                            inBasket: false
                        }]
                    }

                    return [...akk, i];
                }, [])

            return concat(
                of({
                    recommendation: newRecommendation
                })
            );
        }),
        map(newState => SelectedProductActions.ExtendStateAction({ newState })),
    ));
}