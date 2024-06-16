import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

export interface IRating {
    rate: number;
    count: number;
}

export interface IProduct {
    id: number;
    title: string;
    price: number;
    description: string;
    category: string;
    image: string;
    rating: IRating;
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    constructor(
        private http: HttpClient
    ) { }

    getProducts() {

        return this.http.get<IProduct[]>('products');
    }

    getCategories() {

        return this.http.get<string[]>('products/categories');
    }
}
