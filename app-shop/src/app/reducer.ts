import { RouterReducerState, getRouterSelectors, routerReducer } from "@ngrx/router-store";
import { IState as IAppState } from './app.reducer'
import { reducer as appReducer } from './app.reducer'
import { IState as IMainPageState } from "./main-page/storage/reducer";
import { reducer as IMainPageReducer } from "./main-page/storage/reducer";

export interface IStore {
    router: RouterReducerState<any>;
    app: IAppState,
    mainPage: IMainPageState
}

export const Reducer = {
    router: routerReducer,
    app: appReducer,
    mainPage: IMainPageReducer
}

export const {
    selectCurrentRoute,
    selectRouteParams,
} = getRouterSelectors();