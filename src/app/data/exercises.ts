import { Exercise } from '../models';

export const EXERCISES: readonly Exercise[] = [
  {
    id: 'matrix_01',
    type: 'matrix',
    text: {
      es: 'Dadas las matrices A = [[2, -1], [3, 4]] y B = [[0, 5], [1, -2]], calcula A + B y explica qué operación realizaste en cada posición.',
      en: 'Given matrices A = [[2, -1], [3, 4]] and B = [[0, 5], [1, -2]], calculate A + B and explain the operation performed in each position.',
    },
  },
  {
    id: 'matrix_02',
    type: 'matrix',
    text: {
      es: 'Multiplica la matriz A = [[1, 2], [0, -3]] por el vector v = [4, -1] y escribe el vector resultante.',
      en: 'Multiply matrix A = [[1, 2], [0, -3]] by vector v = [4, -1] and write the resulting vector.',
    },
  },
  {
    id: 'matrix_03',
    type: 'matrix',
    text: {
      es: 'Calcula el determinante de la matriz [[5, 2], [7, 3]] e indica si la matriz tiene inversa.',
      en: 'Calculate the determinant of matrix [[5, 2], [7, 3]] and state whether the matrix has an inverse.',
    },
  },
  {
    id: 'matrix_04',
    type: 'matrix',
    text: {
      es: 'Encuentra la matriz transpuesta de [[1, 4, -2], [0, 3, 5]] y describe cómo cambian las filas y columnas.',
      en: 'Find the transpose of [[1, 4, -2], [0, 3, 5]] and describe how rows and columns change.',
    },
  },
  {
    id: 'ecuations_01',
    type: 'ecuations',
    text: {
      es: 'Resuelve la ecuación 3x - 7 = 2x + 9 y comprueba el resultado sustituyendo el valor de x.',
      en: 'Solve the equation 3x - 7 = 2x + 9 and check the result by substituting the value of x.',
    },
  },
  {
    id: 'ecuations_02',
    type: 'ecuations',
    text: {
      es: 'Resuelve el sistema de ecuaciones 2x + y = 11 y x - y = 1 usando el método que prefieras.',
      en: 'Solve the system of equations 2x + y = 11 and x - y = 1 using any method you prefer.',
    },
  },
  {
    id: 'ecuations_03',
    type: 'ecuations',
    text: {
      es: 'Encuentra las soluciones reales de x² - 5x + 6 = 0 e indica qué método utilizaste.',
      en: 'Find the real solutions of x² - 5x + 6 = 0 and state which method you used.',
    },
  },
  {
    id: 'ecuations_04',
    type: 'ecuations',
    text: {
      es: 'Plantea y resuelve una ecuación para este enunciado: el triple de un número menos 4 es igual a 20.',
      en: 'Set up and solve an equation for this statement: three times a number minus 4 equals 20.',
    },
  },
  {
    id: 'basic_trigonometry_01',
    type: 'basic_trigonometry',
    text: {
      es: 'En un triángulo rectángulo, un ángulo mide 30° y la hipotenusa mide 12 cm. Calcula el cateto opuesto a ese ángulo.',
      en: 'In a right triangle, one angle measures 30° and the hypotenuse is 12 cm. Calculate the side opposite that angle.',
    },
  },
  {
    id: 'basic_trigonometry_02',
    type: 'basic_trigonometry',
    text: {
      es: 'Calcula sen(45°), cos(45°) y tan(45°), y expresa los resultados de forma exacta.',
      en: 'Calculate sin(45°), cos(45°), and tan(45°), and express the results exactly.',
    },
  },
  {
    id: 'basic_trigonometry_03',
    type: 'basic_trigonometry',
    text: {
      es: 'Una escalera de 5 m se apoya en una pared y forma un ángulo de 60° con el suelo. Calcula la altura que alcanza.',
      en: 'A 5 m ladder leans against a wall and forms a 60° angle with the ground. Calculate the height it reaches.',
    },
  },
  {
    id: 'basic_trigonometry_04',
    type: 'basic_trigonometry',
    text: {
      es: 'Si cos(θ) = 0.6 en un triángulo rectángulo, interpreta qué cociente de lados representa este valor.',
      en: 'If cos(θ) = 0.6 in a right triangle, interpret which ratio of sides this value represents.',
    },
  },
  {
    id: 'polinomial_function_representation_01',
    type: 'polinomial_function_representation',
    text: {
      es: 'Representa la función f(x) = x² - 4x + 3 indicando sus cortes con los ejes y el vértice.',
      en: 'Represent the function f(x) = x² - 4x + 3 by identifying its intercepts and vertex.',
    },
  },
  {
    id: 'polinomial_function_representation_02',
    type: 'polinomial_function_representation',
    text: {
      es: 'Para la función p(x) = -x² + 2x + 8, determina si la parábola abre hacia arriba o hacia abajo y encuentra sus raíces.',
      en: 'For the function p(x) = -x² + 2x + 8, determine whether the parabola opens upward or downward and find its roots.',
    },
  },
  {
    id: 'polinomial_function_representation_03',
    type: 'polinomial_function_representation',
    text: {
      es: 'Construye una tabla de valores para f(x) = x³ - x usando x = -2, -1, 0, 1 y 2, y describe la forma general de la gráfica.',
      en: 'Build a value table for f(x) = x³ - x using x = -2, -1, 0, 1, and 2, and describe the general shape of the graph.',
    },
  },
  {
    id: 'polinomial_function_representation_04',
    type: 'polinomial_function_representation',
    text: {
      es: 'Factoriza f(x) = x² - 9 y usa la factorización para explicar dónde corta la gráfica al eje x.',
      en: 'Factor f(x) = x² - 9 and use the factorization to explain where the graph crosses the x-axis.',
    },
  },
  {
    id: 'basic_arithmetic_01',
    type: 'basic_arithmetic',
    text: {
      es: 'Calcula 48 ÷ 6 + 7 × 3 respetando el orden de operaciones y muestra cada paso.',
      en: 'Calculate 48 ÷ 6 + 7 × 3 following the order of operations and show each step.',
    },
  },
  {
    id: 'basic_arithmetic_02',
    type: 'basic_arithmetic',
    text: {
      es: 'Simplifica la fracción 84/126 hasta su forma irreducible y explica cómo encontraste el divisor común.',
      en: 'Simplify the fraction 84/126 to lowest terms and explain how you found the common divisor.',
    },
  },
  {
    id: 'basic_arithmetic_03',
    type: 'basic_arithmetic',
    text: {
      es: 'Un cuaderno cuesta 2,75 € y un bolígrafo cuesta 1,40 €. Calcula el precio total de 3 cuadernos y 5 bolígrafos.',
      en: 'A notebook costs €2.75 and a pen costs €1.40. Calculate the total price of 3 notebooks and 5 pens.',
    },
  },
  {
    id: 'basic_arithmetic_04',
    type: 'basic_arithmetic',
    text: {
      es: 'Convierte 0,375 en fracción simplificada y después en porcentaje.',
      en: 'Convert 0.375 into a simplified fraction and then into a percentage.',
    },
  },
];
