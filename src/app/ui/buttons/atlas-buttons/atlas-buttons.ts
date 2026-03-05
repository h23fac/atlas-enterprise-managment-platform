import { Component, input, output } from '@angular/core';

@Component({
  selector: 'atlas-buttons',
  imports: [],
  templateUrl: './atlas-buttons.html',
  styleUrl: './atlas-buttons.scss',
})
export class AtlasButtons {
  click = output<void>();
  typeButton = input<string>();
  nameButton = input<string>();
}
