import { ExerciseTypeId } from './exercise-type.model';

export interface ExamDraftQuestion {
  readonly name: string;
  readonly type: ExerciseTypeId | '';
}
