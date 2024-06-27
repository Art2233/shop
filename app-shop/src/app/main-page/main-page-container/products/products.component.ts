import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../http/products.service';
import { IStore } from '../../../reducer';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

    @Input() products!: IProduct[];
    @Input() isShowAddItem? = true;
    @Output() openItem = new EventEmitter<number>();
    @Output() addItems = new EventEmitter();
    @Output() addItemToBasket = new EventEmitter<IProduct>();
    @Output() removeItemFromBasket = new EventEmitter<IProduct>();

    constructor (
        private store: Store<IStore>
    ) {}
}
