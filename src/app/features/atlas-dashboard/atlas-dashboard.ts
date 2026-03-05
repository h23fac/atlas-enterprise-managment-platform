import { Component } from '@angular/core';
import { AtlasNavbars } from '../../shared/atlas-navbars/atlas-navbars';

@Component({
  selector: 'atlas-dashboard',
  imports: [AtlasNavbars],
  templateUrl: './atlas-dashboard.html',
  styleUrl: './atlas-dashboard.scss',
})
export class AtlasDashboard {
}
