import { Routes } from '@angular/router';
import { AtlasDashboard } from './features/atlas-dashboard/atlas-dashboard';
import { LoginAtlasEnterprise } from './features/login/login';

export const routes: Routes = [
  { path: '', component: LoginAtlasEnterprise },
  { path: 'atlas-dashboard', component: AtlasDashboard },
];
