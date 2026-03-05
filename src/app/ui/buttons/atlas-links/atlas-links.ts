import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'atlas-links',
  imports: [RouterLink],
  templateUrl: './atlas-links.html',
  styleUrl: './atlas-links.scss',
})
export class AtlasLinks {
  nameLink = input<string>();
  navigationLink = input<string>();
}
