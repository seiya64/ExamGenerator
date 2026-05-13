import { Routes } from '@angular/router';
import { CreateExamPlaceholderComponent } from './features/create-exam';
import { ExamsListComponent } from './features/exams';

export const routes: Routes = [
  {
    path: 'exams/new',
    component: CreateExamPlaceholderComponent,
  },
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
