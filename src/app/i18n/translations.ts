export type LanguageCode = 'es' | 'en';

export type TranslationKey =
  | 'app.title'
  | 'shell.languageLabel'
  | 'shell.spanish'
  | 'shell.english'
  | 'shell.statusEyebrow'
  | 'shell.statusTitle'
  | 'shell.statusBody'
  | 'exam.defaultQuestionName';

export const DEFAULT_LANGUAGE: LanguageCode = 'es';

export const TRANSLATIONS: Record<LanguageCode, Record<TranslationKey, string>> = {
  es: {
    'app.title': 'Generador de exámenes',
    'shell.languageLabel': 'Idioma',
    'shell.spanish': 'Español',
    'shell.english': 'Inglés',
    'shell.statusEyebrow': 'Configuración',
    'shell.statusTitle': 'El generador de exámenes está listo',
    'shell.statusBody':
      'La estructura de Angular está funcionando. Las rutas y pantallas de exámenes se añadirán en las próximas tareas.',
    'exam.defaultQuestionName': 'Ejercicio',
  },
  en: {
    'app.title': 'Exam Generator',
    'shell.languageLabel': 'Language',
    'shell.spanish': 'Spanish',
    'shell.english': 'English',
    'shell.statusEyebrow': 'Setup',
    'shell.statusTitle': 'Exam Generator is ready',
    'shell.statusBody':
      'The Angular shell is running. Routes and exam screens will be added in the next tasks.',
    'exam.defaultQuestionName': 'Exercise',
  },
};
