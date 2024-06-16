import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { IStore } from "../../../reducer";
import { Store } from "@ngrx/store";
import * as Action from "../actions";
import { concat, map, switchMap, withLatestFrom } from "rxjs";
import { ProductsService } from "../../../http/products.service";
import { selectProducts } from "../reducer";


@Injectable()
export class ProductsEffect {

    constructor (
        private actions$: Actions,
        private store: Store<IStore>,
        private productsService: ProductsService
    ) {}

    init$ = createEffect(() => this.actions$.pipe(
        ofType(Action.InitAction),
        switchMap(() => {

            const products$ = this.productsService.getProducts().pipe(
                map(res => {

                    return {
                        products: res
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
        map(newState => Action.ExtendStateAction({ newState })),
    ));

    addItems$ = createEffect(() => this.actions$.pipe(
        ofType(Action.AddItemsAction),
        withLatestFrom(this.store.select(selectProducts)),
        switchMap(([{}, products]) => {

            const products$ = this.productsService.getProducts().pipe(
                map(res => {

                    return {
                        products: [...products, ...res],
                    }
                }),
            );

            return concat(products$);
        }),
        map(newState => Action.ExtendStateAction({ newState })),
    ));
}