import { createAction, createReducer, createSelector, on } from "@ngrx/store"
import { IProduct } from "../../http/products.service"
import * as Actions from "./actions"
import { IStore } from "../../reducer"

export interface IState {
    products: IProduct[],
    categories: string[]
}

export const initialState: IState = {
    products: [],
    categories: []
}

export const reducer = createReducer(
    initialState,
    on(Actions.ExtendStateAction, (state, { newState }) => ({
        ...state,
        ...newState
    })),
);

export const selectFeature = (store: IStore) => store.mainPage;

export const selectProducts = createSelector(
    selectFeature,
    state => state.products,
);

export const selectCategories = createSelector(
    selectFeature,
    state => state.categories,
);