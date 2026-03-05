import { Component, input } from '@angular/core';

@Component({
  selector: 'atlas-inputs',
  imports: [],
  templateUrl: './atlas-inputs.html',
  styleUrl: './atlas-inputs.scss',
})
export class AtlasInputs {
  nameInput = input<string>();
  typeInput = input<string>();
}
