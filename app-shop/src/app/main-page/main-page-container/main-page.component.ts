import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../../http/products.service';
import { Store } from '@ngrx/store';
import { IState } from '../../app.reducer';
import { IStore } from '../../reducer';
import { InitAction } from '../storage/actions';
import * as Actions from '../storage/actions'
import { selectCategories, selectProducts } from '../storage/reducer';
import { NavigatePageAction } from '../../app.actions';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrl: './main-page.component.scss'
})
export class MainPageComponent implements OnInit{

    products$ = this.store.select(selectProducts);
    categories$ = this.store.select(selectCategories);

    constructor (
        private store: Store<IStore>
    ) {}

    ngOnInit(): void {

        console.log(2);
        
        this.store.dispatch(InitAction());
    }

    openItem(id: number) {

        this.store.dispatch(NavigatePageAction({ path: [ `product/${id}` ] }));
    }

    addItems() {

        this.store.dispatch(Actions.AddItemsAction());
    }
}
