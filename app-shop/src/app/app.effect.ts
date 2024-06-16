import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { IStore } from "./reducer";
import * as Action from './app.actions';
import { concat, switchMap, tap } from "rxjs";
import { Router } from "@angular/router";


@Injectable()
export class AppEffects {

    constructor (
        private actions$: Actions,
        private store: Store<IStore>,
        private router: Router
    ) {}

    navigatePage$ = createEffect(() => this.actions$.pipe(
        ofType(Action.NavigatePageAction),
        tap(({ path }) => {

            return this.router.navigate(path);
        }),
    ), {
        dispatch: false,
    });
}