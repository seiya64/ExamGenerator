import { TranslatedText } from './translated-text.model';

export type ExerciseTypeId =
  | 'matrix'
  | 'ecuations'
  | 'basic_trigonometry'
  | 'polinomial_function_representation'
  | 'basic_arithmetic';

export interface ExerciseType {
  readonly id: ExerciseTypeId;
  readonly label: TranslatedText;
}
