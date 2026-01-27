import { Component, signal } from '@angular/core';
import { LoginAtlasEnterprise } from './features/login/login';

@Component({
  selector: 'main-atlas-enterprise-managment-platform',
  imports: [LoginAtlasEnterprise],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('atlas-enterprise-managment-platform');
}
