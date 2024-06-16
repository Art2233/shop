import { Component, Input } from '@angular/core';
import { IProduct } from '../../../http/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export class ProductsComponent {

    @Input() products!: IProduct[];
}
