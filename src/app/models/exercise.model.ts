import { TranslatedText } from './translated-text.model';

export interface Exercise {
  readonly id: string;
  readonly type: string;
  readonly text: TranslatedText;
}
