import { Injectable } from '@angular/core';
import {
    HttpRequest,
    HttpHandler,
    HttpEvent,
    HttpInterceptor
} from '@angular/common/http';
import { Observable, first, flatMap, tap } from 'rxjs';
import { Store } from '@ngrx/store';
import { IStore } from '../reducer';

@Injectable()
export class ApiUrlInterceptor implements HttpInterceptor {

    constructor(
        private store: Store<IStore>
    ) { }

    intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {

        let clone = request.clone({
            url: `https://fakestoreapi.com/${request.url}`,
        });

        return next.handle(clone);
    }
}