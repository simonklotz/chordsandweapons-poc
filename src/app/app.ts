import { Component, signal } from '@angular/core';
import { HeaderComponent } from './layout/header.component';
import { MainComponent } from './layout/main.component';
import { FooterComponent } from './layout/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MainComponent, FooterComponent],
  template: `
    <app-header class="app-header"><h1 class="h1">Header</h1></app-header>
    <app-main class="app-main"><h1 class="h1">Main</h1></app-main>
    <app-footer class="app-footer"><h1 class="h1">Footer</h1></app-footer>
  `,
})
export class App {
  protected readonly title = signal('chordsandweapons-poc');
}
