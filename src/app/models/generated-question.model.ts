import { TranslatedText } from './translated-text.model';
import { ExerciseTypeId } from './exercise-type.model';

export interface GeneratedQuestion {
  readonly name: string;
  readonly type: ExerciseTypeId;
  readonly exerciseId: string;
  readonly exerciseText: TranslatedText;
}
