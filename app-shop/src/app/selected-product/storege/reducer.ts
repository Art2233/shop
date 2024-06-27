import { createReducer, createSelector, on } from "@ngrx/store";
import * as Actions from './actions';
import { IStore } from "../../reducer";
import { IProduct } from "../../http/products.service";

export interface IState {
    currentProduct: IProduct | null,
    recommendation: IProduct[]
}

export const initialState: IState = {
    currentProduct: null,
    recommendation: [],
}

export const reducer = createReducer(
    initialState,
    on(Actions.ExtendStateAction, (state, { newState }) => ({
        ...state,
        ...newState
    })),
);

export const selectFeature = (store: IStore) => store.selectedProduct;

export const selectCurrentProduct = createSelector(
    selectFeature,
    state => state.currentProduct,
);

export const selectRecommendation = createSelector(
    selectFeature,
    state => state.recommendation,
);