import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UnitDetailsComponent } from './unit-details/unit-details.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'unit-details',
    component: UnitDetailsComponent,
  },
];
