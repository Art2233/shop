import { createAction, props } from "@ngrx/store";
import { IState } from "./reducer";

export const ExtendStateAction = createAction(
    '[Main Page] Extend State',
    props<{ newState: Partial<IState> }>(),
);

export const InitAction = createAction(
    '[Main Page] Init Action'
)