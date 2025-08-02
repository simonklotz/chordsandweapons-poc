import { Component, OnInit } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { Menubar } from 'primeng/menubar';
import { InputText } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { menuItems } from './menu-items';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-menu-bar',
  standalone: true,
  imports: [Menubar, InputText, ButtonModule, RouterLink],
  template: `
    <p-menubar [model]="items">
      <ng-template #end>
        <div class="flex items-center !gap-2">
          <input type="text" pInputText placeholder="Search" class="w-36" />
          <p-button
            icon="pi pi-shopping-cart"
            iconPos="right"
            routerLink="/cart"
          />
        </div>
      </ng-template>
    </p-menubar>
  `,
})
export class MenuBarComponent implements OnInit {
  items: MenuItem[] = [];

  ngOnInit() {
    this.items = menuItems;
  }
}
