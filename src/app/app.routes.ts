import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { UnitDetailsComponent } from './unit-details/unit-details.component';
import { ParentComponent } from './parent/parent.component';
import { AppComponent } from './app.component';
import { DirectivesPracticeComponent } from './directives-practice/directives-practice.component';
import { ChangeDetectionComponent } from './change-detection/change-detection.component';
export const routes: Routes = [
  {
    path: '',
    redirectTo: 'changeDetection',
    pathMatch: 'full',
  },
  {
    path: 'app',
    component: AppComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'unit-details',
    component: UnitDetailsComponent,
  },
  {
    path: 'parent',
    component: ParentComponent,
  },
  {
    path: 'directives',
    component: DirectivesPracticeComponent,
  },
  {
    path: 'changeDetection',
    component: ChangeDetectionComponent,
  },
];
