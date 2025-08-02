import { Component, inject, OnInit, Signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { RouteData } from './route-data.interface';
import { ApiService } from '../../core/api/api.service';
import { ProductTileComponent } from '../../shared/product/product-tile.component';
import { ProductResponse } from '../../core/api/product-response.interface';

@Component({
  selector: 'app-search-result',
  standalone: true,
  imports: [ProductTileComponent],
  template: `
    <div>
      <h1 class="h1">{{ title }}</h1>
      <div class="search-result-wrapper">
        @for (product of products().products; track product) {
          <app-product-tile
            [product]="product"
            class="app-product-tile"
          ></app-product-tile>
        }
      </div>
    </div>
  `,
})
export class SearchResultComponent implements OnInit {
  private readonly _activatedRoute = inject(ActivatedRoute);
  private readonly _apiService = inject(ApiService);

  products: Signal<ProductResponse>;

  constructor() {
    this.products = toSignal(this._apiService.getProducts(), {
      initialValue: {
        products: [],
        pageInfo: { hasNextPage: false, endCursor: null },
      },
    });
  }

  get routeSnapshotData(): RouteData {
    return this._activatedRoute.snapshot.data as RouteData;
  }

  get title(): string {
    return this.routeSnapshotData.title;
  }

  ngOnInit(): void {
    // TODO
  }
}
