import { Routes } from '@angular/router';
import { CreateExamComponent } from './features/create-exam';
import { ExamDetailPlaceholderComponent } from './features/exam-detail';
import { ExamsListComponent } from './features/exams';

export const routes: Routes = [
  {
    path: 'exams/new',
    component: CreateExamComponent,
  },
  {
    path: 'exams/:id',
    component: ExamDetailPlaceholderComponent,
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
