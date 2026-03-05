import { Component } from '@angular/core';
import { AtlasLinks } from '../../ui/buttons/atlas-links/atlas-links';
import { NavBarLinks } from '../../../interface/interface';
@Component({
  selector: 'app-atlas-navbars',
  imports: [AtlasLinks],
  templateUrl: './atlas-navbars.html',
  styleUrl: './atlas-navbars.scss',
})
export class AtlasNavbars {
  handlerLink() {
    console.log('Action link of navbar');
  }

   links: NavBarLinks[] = [
    {
      label: 'Dashboard',
      navigations: '/dashboard',
    },
    {
      label: 'Vacantes',
      navigations: '/vacantes',
    },
    {
      label: 'Candidatos',
      navigations: '/candidatos',
    },
    {
      label: 'Empleados',
      navigations: '/empleados',
    },
        {
      label: 'Reportes',
      navigations: '/reportes',
    },
  ];
}
