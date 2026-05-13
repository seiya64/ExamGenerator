import { TranslatedText } from './translated-text.model';

export interface GeneratedQuestion {
  readonly name: string;
  readonly type: string;
  readonly exerciseId: string;
  readonly exerciseText: TranslatedText;
}
