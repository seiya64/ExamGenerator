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
  | 'create.eyebrow'
  | 'create.title'
  | 'create.body'
  | 'create.examNameLabel'
  | 'create.examNamePlaceholder'
  | 'create.examNameRequired'
  | 'create.questionsTitle'
  | 'create.questionsBody'
  | 'create.addQuestion'
  | 'create.minimumQuestionsRequired'
  | 'create.generateAction'
  | 'create.questionNameLabel'
  | 'create.questionTypeLabel'
  | 'create.questionTypePlaceholder'
  | 'create.questionTypeRequired'
  | 'create.removeQuestion'
  | 'detail.placeholderEyebrow'
  | 'detail.placeholderTitle'
  | 'detail.placeholderBody'
  | 'detail.questionLabel'
  | 'detail.exerciseTypeLabel'
  | 'detail.generatedAt'
  | 'detail.backToExams'
  | 'detail.notFoundEyebrow'
  | 'detail.notFoundTitle'
  | 'detail.notFoundBody'
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
    'create.eyebrow': 'Nuevo examen',
    'create.title': 'Crear examen',
    'create.body': 'Configura las preguntas y genera un examen con ejercicios aleatorios.',
    'create.examNameLabel': 'Nombre del examen',
    'create.examNamePlaceholder': 'Por ejemplo: Examen de álgebra',
    'create.examNameRequired': 'El nombre del examen es obligatorio.',
    'create.questionsTitle': 'Preguntas',
    'create.questionsBody': 'Añade al menos dos preguntas y selecciona un tipo para cada una.',
    'create.addQuestion': 'Añadir pregunta',
    'create.minimumQuestionsRequired': 'Añade al menos dos preguntas.',
    'create.generateAction': 'Generar examen',
    'create.questionNameLabel': 'Nombre de la pregunta',
    'create.questionTypeLabel': 'Tipo de ejercicio',
    'create.questionTypePlaceholder': 'Selecciona un tipo',
    'create.questionTypeRequired': 'Selecciona un tipo de ejercicio.',
    'create.removeQuestion': 'Eliminar pregunta',
    'detail.placeholderEyebrow': 'Ruta /exams/:id',
    'detail.placeholderTitle': 'Detalle del examen',
    'detail.placeholderBody': 'Esta pantalla mostrará el examen generado en modo solo lectura.',
    'detail.questionLabel': 'Pregunta',
    'detail.exerciseTypeLabel': 'Tipo',
    'detail.generatedAt': 'Generado',
    'detail.backToExams': 'Volver a exámenes',
    'detail.notFoundEyebrow': 'No encontrado',
    'detail.notFoundTitle': 'No encontramos ese examen',
    'detail.notFoundBody': 'Puede que se haya eliminado o que el enlace no sea correcto.',
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
    'create.eyebrow': 'New exam',
    'create.title': 'Create exam',
    'create.body': 'Configure the questions and generate an exam with random exercises.',
    'create.examNameLabel': 'Exam name',
    'create.examNamePlaceholder': 'For example: Algebra exam',
    'create.examNameRequired': 'The exam name is required.',
    'create.questionsTitle': 'Questions',
    'create.questionsBody': 'Add at least two questions and select a type for each one.',
    'create.addQuestion': 'Add question',
    'create.minimumQuestionsRequired': 'Add at least two questions.',
    'create.generateAction': 'Generate exam',
    'create.questionNameLabel': 'Question name',
    'create.questionTypeLabel': 'Exercise type',
    'create.questionTypePlaceholder': 'Select a type',
    'create.questionTypeRequired': 'Select an exercise type.',
    'create.removeQuestion': 'Remove question',
    'detail.placeholderEyebrow': 'Route /exams/:id',
    'detail.placeholderTitle': 'Exam detail',
    'detail.placeholderBody': 'This screen will show the generated exam in read-only mode.',
    'detail.questionLabel': 'Question',
    'detail.exerciseTypeLabel': 'Type',
    'detail.generatedAt': 'Generated',
    'detail.backToExams': 'Back to exams',
    'detail.notFoundEyebrow': 'Not found',
    'detail.notFoundTitle': 'We could not find that exam',
    'detail.notFoundBody': 'It may have been deleted, or the link may not be correct.',
    'exam.defaultQuestionName': 'Exercise',
  },
};
