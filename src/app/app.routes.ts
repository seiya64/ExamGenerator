import { Routes } from '@angular/router';
import { ExamsPlaceholderComponent } from './features/exams';

export const routes: Routes = [
  {
    path: 'exams',
    component: ExamsPlaceholderComponent,
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
