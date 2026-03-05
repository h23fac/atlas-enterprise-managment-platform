import { Component, signal } from '@angular/core';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'main-atlas-enterprise-managment-platform',
  imports: [ RouterModule ],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('atlas-enterprise-managment-platform');
}
