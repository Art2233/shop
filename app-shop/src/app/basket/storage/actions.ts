import { createAction, props } from "@ngrx/store";
import { IState } from "./reducer";
import { IProduct } from "../../http/products.service";

export const ExtendStateAction = createAction(
    '[Basket] Extend State',
    props<{ newState: Partial<IState> }>(),
);

export const AddItemToBasketAction = createAction(
    '[Basket] Add Item To Basket',
    props<{ item: IProduct }>(),
);

export const RemoveItemFromBasketAction = createAction(
    '[Basket] Remove Item From Basket',
    props<{ item: IProduct }>(),
);