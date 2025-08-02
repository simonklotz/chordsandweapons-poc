import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, tap } from 'rxjs';
import { ProductResponse } from './product-response.interface';
import { PageInfo } from './page-info.interface';

@Injectable({ providedIn: 'root' })
export class ApiService {
  private readonly BASE_URL = 'https://api-e6rwniv6wa-uc.a.run.app';
  private readonly _http = inject(HttpClient);

  productsPageInfo: PageInfo | undefined;

  getProducts(): Observable<ProductResponse> {
    return this._http
      .get<ProductResponse>(this.BASE_URL + '/products')
      .pipe(tap((result) => console.log('result', result)));
  }
}
