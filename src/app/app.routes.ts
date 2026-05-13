import { Routes } from '@angular/router';
import { CreateExamComponent } from './features/create-exam';
import { ExamsListComponent } from './features/exams';

export const routes: Routes = [
  {
    path: 'exams/new',
    component: CreateExamComponent,
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
