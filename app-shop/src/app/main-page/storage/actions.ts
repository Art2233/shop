import { createAction, props } from "@ngrx/store";
import { IState } from "./reducer";
import { IProduct } from "../../http/products.service";

export const ExtendStateAction = createAction(
    '[Main Page] Extend State',
    props<{ newState: Partial<IState> }>(),
);

export const InitAction = createAction(
    '[Main Page] Init Action'
);

export const AddItemsAction = createAction(
    '[Main Page] Add Items'
);

export const CategoryProductsAction = createAction(
    '[Main Page] Category Products',
    props<{ category: string }>(),
);

export const AddItemToBasketProductAction = createAction(
    '[Main Page] Add Item To Basket Product',
    props<{ item: IProduct }>(),
);

export const RemoveItemFromBasketProductAction = createAction(
    '[Main Page] Remove Item From Basket Product',
    props<{ item: IProduct }>(),
);