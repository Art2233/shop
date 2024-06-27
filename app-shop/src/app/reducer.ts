import { RouterReducerState, getRouterSelectors, routerReducer } from "@ngrx/router-store";
import { IState as IAppState } from './app.reducer'
import { reducer as appReducer } from './app.reducer'
import { IState as IMainPageState } from "./main-page/storage/reducer";
import { reducer as IMainPageReducer } from "./main-page/storage/reducer";
import { IState as ISelectedProductState } from "./selected-product/storege/reducer";
import { reducer as ISelectedProductReducer } from "./selected-product/storege/reducer";
import { IState as IBasketState } from "./basket/storage/reducer";
import { reducer as IBasketReducer } from "./basket/storage/reducer";


export interface IStore {
    router: RouterReducerState<any>;
    app: IAppState,
    mainPage: IMainPageState,
    selectedProduct: ISelectedProductState,
    basket: IBasketState,
}

export const Reducer = {
    router: routerReducer,
    app: appReducer,
    mainPage: IMainPageReducer,
    selectedProduct: ISelectedProductReducer,
    basket: IBasketReducer
}

export const {
    selectCurrentRoute,
    selectRouteParams,
} = getRouterSelectors();