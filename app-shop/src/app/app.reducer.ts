import { createReducer, createSelector, on } from "@ngrx/store"
import * as Actions from './app.actions';
import { IStore } from "./reducer";

export interface IState {
    user: any[],
}

export const initialState: IState = {
    user: [],
}

export const reducer = createReducer(
    initialState,
    on(Actions.ExtendStateAction, (state, { newState }) => ({
        ...state,
        ...newState
    })),
);

export const selectFeature = (store: IStore) => store.app;