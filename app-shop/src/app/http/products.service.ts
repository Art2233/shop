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
    inBasket: boolean
}

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

    constructor(
        private http: HttpClient
    ) { }

    getAllProducts() {

        return this.http.get<IProduct[]>('products');
    }

    getCategories() {

        return this.http.get<string[]>('products/categories');
    }

    getCategoryProducts(category: string) {

        return this.http.get<IProduct[]>(`products/category/${category}`);
    }

    getProductById(id: number) {

        return this.http.get<IProduct>(`products/${id}`);
    }
}
