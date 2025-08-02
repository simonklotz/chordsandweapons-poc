import { Component, input, OnInit } from '@angular/core';
import { Button } from 'primeng/button';
import { Product } from './product.interface';
import { Card } from 'primeng/card';

@Component({
  selector: 'app-product-tile',
  standalone: true,
  imports: [Button, Card],
  template: `
    <p-card [style]="{ width: '25rem', overflow: 'hidden' }">
      <ng-template #header>
        <img
          class="w-full"
          src="{{ product()?.imageUrl }}"
          alt="{{ product()?.title }}"
        />
      </ng-template>
      <ng-template #title>{{ product()?.title }}</ng-template>
      <ng-template #subtitle>{{ product()?.artist }}</ng-template>
      <p>
        {{ product()?.description }}
      </p>
      <ng-template #footer>
        <div class="flex justify-between items-center">
          <div class="mt-0 font-semibold text-xl">
            {{ product()?.price + ' €' }}
          </div>
          <span>
            <p-button
              icon="pi pi-heart"
              severity="secondary"
              [outlined]="true"
            />
            <p-button icon="pi pi-shopping-cart" styleClass="ml-2" />
          </span>
        </div>
      </ng-template>
    </p-card>
  `,
})
export class ProductTileComponent implements OnInit {
  readonly product = input<Product>();

  ngOnInit(): void {
    // TODO
  }
}
