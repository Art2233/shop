import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { IStore } from "../../../reducer";
import { Store } from "@ngrx/store";
import * as MainPageActions from "../actions";
import { concat, map, of, switchMap, withLatestFrom } from "rxjs";
import { ProductsService } from "../../../http/products.service";
import { selectProducts } from "../reducer";
import { selectBasketProducts } from "../../../basket/storage/reducer";


@Injectable()
export class ProductsEffect {

    constructor (
        private actions$: Actions,
        private store: Store<IStore>,
        private productsService: ProductsService
    ) {}

    init$ = createEffect(() => this.actions$.pipe(
        ofType(MainPageActions.InitAction),
        withLatestFrom(
            this.store.select(selectBasketProducts),
            this.store.select(selectProducts),
        ),
        switchMap(([{}, basket, product]) => {

            const products$ = this.productsService.getAllProducts().pipe(
                map(res => {

                    return {
                        products: product.length
                            ? product.map(i => ({
                                ...i,
                                inBasket: basket.filter(p => p.id == i.id)[0]?.inBasket ?? false
                            }))
                            : res.map(i => ({
                                ...i,
                                inBasket: basket.filter(p => p.id == i.id)[0]?.inBasket ?? false
                            }))
                    }
                }),
            );

            const categories$ = this.productsService.getCategories().pipe(
                map(res => {
                    
                    return {
                        categories: res
                    }
                }),
            )

            return concat(
                products$,
                categories$
            );
        }),
        map(newState => MainPageActions.ExtendStateAction({ newState })),
    ));

    addItems$ = createEffect(() => this.actions$.pipe(
        ofType(MainPageActions.AddItemsAction),
        withLatestFrom(this.store.select(selectProducts)),
        switchMap(([{}, products]) => {

            const products$ = this.productsService.getAllProducts().pipe(
                map(res => {

                    return {
                        products: [...products, ...res.map(i => ({
                            ...i,
                            inBasket: false
                        }))],
                    }
                }),
            );

            return concat(products$);
        }),
        map(newState => MainPageActions.ExtendStateAction({ newState })),
    ));

    addItemInBasket$ = createEffect(() => this.actions$.pipe(
        ofType(MainPageActions.AddItemToBasketProductAction),
        withLatestFrom(this.store.select(selectProducts)),
        switchMap(([{ item }, products]) => {

            const newProducts = products
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
                    products: newProducts
                })
            );
        }),
        map(newState => MainPageActions.ExtendStateAction({ newState })),
    ));

    removeItemFromBasket$ = createEffect(() => this.actions$.pipe(
        ofType(MainPageActions.RemoveItemFromBasketProductAction),
        withLatestFrom(this.store.select(selectProducts)),
        switchMap(([{ item }, products]) => {

            const newProducts = products
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
                    products: newProducts
                })
            );
        }),
        map(newState => MainPageActions.ExtendStateAction({ newState })),
    ));
}