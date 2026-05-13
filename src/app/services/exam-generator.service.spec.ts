import { TestBed } from '@angular/core/testing';
import { TranslationService } from '../i18n';
import { ExamDraftQuestion, ExerciseTypeId } from '../models';
import { ExamGeneratorService } from './exam-generator.service';

describe('ExamGeneratorService', () => {
  let service: ExamGeneratorService;

  beforeEach(() => {
    localStorage.clear();
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamGeneratorService);
  });

  it('should generate an exam with id and creation date', () => {
    const exam = service.generate(' Algebra quiz ', [createQuestion('Warm up', 'basic_arithmetic')]);

    expect(exam.id).toMatch(/^exam_\d+_[a-z0-9]+$/);
    expect(exam.name).toBe('Algebra quiz');
    expect(Date.parse(exam.createdAt)).not.toBeNaN();
    expect(exam.questions).toHaveLength(1);
  });

  it('should generate questions matching the selected type', () => {
    const exam = service.generate('Mixed exam', [
      createQuestion('Matrix question', 'matrix'),
      createQuestion('Trigonometry question', 'basic_trigonometry'),
      createQuestion('Arithmetic question', 'basic_arithmetic'),
    ]);

    expect(exam.questions.map((question) => question.type)).toEqual([
      'matrix',
      'basic_trigonometry',
      'basic_arithmetic',
    ]);
    expect(exam.questions[0].exerciseId).toMatch(/^matrix_/);
    expect(exam.questions[1].exerciseId).toMatch(/^basic_trigonometry_/);
    expect(exam.questions[2].exerciseId).toMatch(/^basic_arithmetic_/);
  });

  it('should avoid duplicate exercise ids when enough matching exercises exist', () => {
    const exam = service.generate('Matrix exam', [
      createQuestion('', 'matrix'),
      createQuestion('', 'matrix'),
      createQuestion('', 'matrix'),
      createQuestion('', 'matrix'),
    ]);

    const exerciseIds = exam.questions.map((question) => question.exerciseId);

    expect(new Set(exerciseIds).size).toBe(exerciseIds.length);
  });

  it('should reuse matching exercises only after the available pool is exhausted', () => {
    const exam = service.generate('Large matrix exam', [
      createQuestion('', 'matrix'),
      createQuestion('', 'matrix'),
      createQuestion('', 'matrix'),
      createQuestion('', 'matrix'),
      createQuestion('', 'matrix'),
    ]);

    const exerciseIds = exam.questions.map((question) => question.exerciseId);

    expect(exerciseIds).toHaveLength(5);
    expect(new Set(exerciseIds).size).toBe(4);
    expect(exam.questions.every((question) => question.type === 'matrix')).toBe(true);
  });

  it('should fall back to localized default question names', () => {
    const exam = service.generate('Defaults', [
      createQuestion('', 'ecuations'),
      createQuestion('   ', 'ecuations'),
    ]);

    expect(exam.questions.map((question) => question.name)).toEqual(['Ejercicio 1', 'Ejercicio 2']);
  });

  it('should use English default question names when English is active', () => {
    TestBed.inject(TranslationService).setLanguage('en');

    const exam = service.generate('Defaults', [createQuestion('', 'basic_arithmetic')]);

    expect(exam.questions[0].name).toBe('Exercise 1');
  });

  it('should snapshot bilingual exercise text', () => {
    const exam = service.generate('Snapshot', [createQuestion('Question', 'basic_arithmetic')]);

    expect(exam.questions[0].exerciseText.es).toBeTruthy();
    expect(exam.questions[0].exerciseText.en).toBeTruthy();
  });
});

function createQuestion(name: string, type: ExerciseTypeId): ExamDraftQuestion {
  return {
    name,
    type,
  };
}
