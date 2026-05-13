import { Routes } from '@angular/router';
import { ExamsListComponent } from './features/exams';

export const routes: Routes = [
  {
    path: 'exams',
    component: ExamsListComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'exams',
  },
  {
    path: '**',
    redirectTo: 'exams',
  },
];
