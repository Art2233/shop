import { createAction, props } from "@ngrx/store";
import { IState } from "./reducer";
import { IProduct } from "../../http/products.service";

export const ExtendStateAction = createAction(
    '[Selected Product] Extend State',
    props<{ newState: Partial<IState> }>(),
);

export const SelecteCurrentProductAction = createAction(
    '[Selected Product] Selecte Current Product',
    props<{ id: number }>(),
);

export const AddItemToBasketProductAction = createAction(
    '[Main Page] Add Item To Basket Product',
    props<{ item: IProduct }>(),
);

export const RemoveItemFromBasketProductAction = createAction(
    '[Main Page] Remove Item From Basket Product',
    props<{ item: IProduct }>(),
);