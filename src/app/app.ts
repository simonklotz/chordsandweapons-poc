import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [],
  template: `
    <h1>Chordsandweapons</h1>
  `
})
export class App {
  protected readonly title = signal('chordsandweapons-poc');
}
