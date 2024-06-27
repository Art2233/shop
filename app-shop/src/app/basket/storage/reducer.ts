import { createReducer, createSelector, on } from "@ngrx/store";
import * as Actions from "./actions"
import { IProduct } from "../../http/products.service";
import { IStore } from "../../reducer";

export interface IState {
    basketProducts: IProduct[]
}

export const initialState: IState = {
    basketProducts: []
}

export const reducer = createReducer(
    initialState,
    on(Actions.ExtendStateAction, (state, { newState }) => ({
        ...state,
        ...newState
    })),
);

export const selectFeature = (store: IStore) => store.basket;

export const selectBasketProducts = createSelector(
    selectFeature,
    store => store.basketProducts,
);