import { ExerciseType } from '../models';

export const EXERCISE_TYPES: readonly ExerciseType[] = [
  {
    id: 'matrix',
    label: {
      es: 'Matrices',
      en: 'Matrix',
    },
  },
  {
    id: 'ecuations',
    label: {
      es: 'Ecuaciones',
      en: 'Ecuations',
    },
  },
  {
    id: 'basic_trigonometry',
    label: {
      es: 'Trigonometría básica',
      en: 'Basic trigonometry',
    },
  },
  {
    id: 'polinomial_function_representation',
    label: {
      es: 'Representación de funciones polinómicas',
      en: 'Polinomial function representation',
    },
  },
  {
    id: 'basic_arithmetic',
    label: {
      es: 'Aritmética básica',
      en: 'Basic arithmetic',
    },
  },
];
