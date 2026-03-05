import { Component } from '@angular/core';
import { AtlasInputs } from '../../ui/inputs/atlas-inputs/atlas-inputs';
import { AtlasButtons } from '../../ui/buttons/atlas-buttons/atlas-buttons';
import { Router } from '@angular/router';

@Component({
  selector: 'login-atlas-enterprise',
  imports: [AtlasInputs, AtlasButtons],
  templateUrl: './login.html',
  styleUrl: './login.scss',
})
export class LoginAtlasEnterprise {
  constructor(private router: Router) {
  }

  onSubmit() {
    console.log('redirect without B.E')
    this.router.navigate(['/atlas-dashboard']);
  }

}
