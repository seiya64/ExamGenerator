export type LanguageCode = 'es' | 'en';

export type TranslationKey =
  | 'app.title'
  | 'shell.languageLabel'
  | 'shell.spanish'
  | 'shell.english'
  | 'shell.statusEyebrow'
  | 'shell.statusTitle'
  | 'shell.statusBody'
  | 'exams.placeholderEyebrow'
  | 'exams.placeholderTitle'
  | 'exams.placeholderBody'
  | 'exams.createAction'
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
    'exams.placeholderEyebrow': 'Ruta /exams',
    'exams.placeholderTitle': 'Listado de exámenes',
    'exams.placeholderBody':
      'Esta pantalla mostrará los exámenes guardados cuando se implemente el listado completo.',
    'exams.createAction': 'Crear examen',
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
    'exams.placeholderEyebrow': 'Route /exams',
    'exams.placeholderTitle': 'Exams list',
    'exams.placeholderBody':
      'This screen will show saved exams when the full list is implemented.',
    'exams.createAction': 'Create exam',
    'exam.defaultQuestionName': 'Exercise',
  },
};
