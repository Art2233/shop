import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IStore } from "../../../reducer";
import * as MainPageActions from "../actions";
import { concat, map, switchMap, withLatestFrom } from "rxjs";
import { selectProducts } from "../reducer";
import { ProductsService } from "../../../http/products.service";

@Injectable()
export class CategoriesEffects {

    constructor (
        private actions$: Actions,
        private store: Store<IStore>,
        private productsService: ProductsService
    ) {}

    categoryProducts$ = createEffect(() => this.actions$.pipe(
        ofType(MainPageActions.CategoryProductsAction),
        switchMap(({ category }) => {

            const proucts$ = this.getCategoryProducts(category).pipe(
                map(res => {

                    return {
                        products: res.map(i => ({
                            ...i,
                            inBasket: false
                        })),
                        category: category
                    };
                }),
            );

            return concat(proucts$);
        }),
        map(newState => MainPageActions.ExtendStateAction({ newState })),
    ));

    getCategoryProducts(category: string) {

        return category == 'all'
            ? this.productsService.getAllProducts()
            : this.productsService.getCategoryProducts(category);
    }
}