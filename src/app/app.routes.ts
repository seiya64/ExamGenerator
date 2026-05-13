import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'exams/new',
    loadComponent: () =>
      import('./features/create-exam').then((module) => module.CreateExamComponent),
  },
  {
    path: 'exams/:id',
    loadComponent: () =>
      import('./features/exam-detail').then((module) => module.ExamDetailComponent),
  },
  {
    path: 'exams',
    loadComponent: () => import('./features/exams').then((module) => module.ExamsListComponent),
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
