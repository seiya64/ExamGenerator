export type LanguageCode = 'es' | 'en';

export type TranslationKey =
  | 'app.title'
  | 'shell.languageLabel'
  | 'shell.spanish'
  | 'shell.english'
  | 'shell.statusEyebrow'
  | 'shell.statusTitle'
  | 'shell.statusBody'
  | 'exams.listEyebrow'
  | 'exams.listTitle'
  | 'exams.listBody'
  | 'exams.emptyEyebrow'
  | 'exams.emptyTitle'
  | 'exams.emptyBody'
  | 'exams.createAction'
  | 'exams.openExam'
  | 'exams.deleteExam'
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
    'exams.listEyebrow': 'Exámenes',
    'exams.listTitle': 'Exámenes guardados',
    'exams.listBody': 'Consulta los exámenes que ya has generado en este navegador.',
    'exams.emptyEyebrow': 'Sin exámenes',
    'exams.emptyTitle': 'No hay exámenes todavía',
    'exams.emptyBody': 'Cuando generes tu primer examen, aparecerá aquí con su fecha de creación.',
    'exams.createAction': 'Crear examen',
    'exams.openExam': 'Abrir examen',
    'exams.deleteExam': 'Eliminar examen',
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
    'exams.listEyebrow': 'Exams',
    'exams.listTitle': 'Saved exams',
    'exams.listBody': 'Review the exams you have already generated in this browser.',
    'exams.emptyEyebrow': 'No exams',
    'exams.emptyTitle': 'No exams yet',
    'exams.emptyBody': 'Once you generate your first exam, it will appear here with its creation date.',
    'exams.createAction': 'Create exam',
    'exams.openExam': 'Open exam',
    'exams.deleteExam': 'Delete exam',
    'exam.defaultQuestionName': 'Exercise',
  },
};
