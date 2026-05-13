import { GeneratedQuestion } from './generated-question.model';

export interface GeneratedExam {
  readonly id: string;
  readonly name: string;
  readonly createdAt: string;
  readonly questions: readonly GeneratedQuestion[];
}
