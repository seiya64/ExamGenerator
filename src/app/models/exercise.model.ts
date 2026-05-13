import { TranslatedText } from './translated-text.model';
import { ExerciseTypeId } from './exercise-type.model';

export interface Exercise {
  readonly id: string;
  readonly type: ExerciseTypeId;
  readonly text: TranslatedText;
}
