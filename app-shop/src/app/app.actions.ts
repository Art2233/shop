import { createAction, props } from "@ngrx/store";
import { IState } from "./app.reducer";

export const ExtendStateAction = createAction(
    '[App] Extend State',
    props<{ newState: Partial<IState> }>(),
);

export const NavigatePageAction = createAction(
    '[App] Navigate Page',
    props<{ path: any[] }>(),
);
