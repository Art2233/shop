import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IProduct } from '../../../http/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

    @Input() products!: IProduct[];
    @Output() openItem = new EventEmitter<number>();
    @Output() addItems = new EventEmitter();
}
