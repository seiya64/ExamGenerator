import { TestBed } from '@angular/core/testing';
import { GeneratedExam } from '../models';
import { ExamStorageService } from './exam-storage.service';

const STORAGE_KEY = 'exam-generator:generated-exams:v1';

describe('ExamStorageService', () => {
  let service: ExamStorageService;

  beforeEach(() => {
    localStorage.clear();

    TestBed.configureTestingModule({});
    service = TestBed.inject(ExamStorageService);
  });

  it('should load an empty list when storage is empty', () => {
    expect(service.loadAll()).toEqual([]);
  });

  it('should save and load generated exams', () => {
    const exam = createExam('exam_1', 'Algebra');

    service.save(exam);

    expect(service.loadAll()).toEqual([exam]);
    expect(service.loadById('exam_1')).toEqual(exam);
  });

  it('should return undefined when loading a missing exam id', () => {
    service.save(createExam('exam_1', 'Algebra'));

    expect(service.loadById('missing')).toBeUndefined();
  });

  it('should replace an existing exam with the same id', () => {
    service.save(createExam('exam_1', 'Original'));
    service.save(createExam('exam_1', 'Updated'));

    expect(service.loadAll()).toEqual([createExam('exam_1', 'Updated')]);
  });

  it('should delete an exam by id', () => {
    const firstExam = createExam('exam_1', 'First');
    const secondExam = createExam('exam_2', 'Second');
    service.save(firstExam);
    service.save(secondExam);

    service.deleteById('exam_1');

    expect(service.loadAll()).toEqual([secondExam]);
  });

  it('should leave stored exams unchanged when deleting an unknown id', () => {
    const exam = createExam('exam_1', 'Algebra');
    service.save(exam);

    service.deleteById('missing');

    expect(service.loadAll()).toEqual([exam]);
  });

  it('should return an empty list for invalid JSON', () => {
    localStorage.setItem(STORAGE_KEY, '{not-json');

    expect(service.loadAll()).toEqual([]);
  });

  it('should return an empty list for invalid exam shapes', () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify([{ id: 'exam_1' }]));

    expect(service.loadAll()).toEqual([]);
  });
});

function createExam(id: string, name: string): GeneratedExam {
  return {
    id,
    name,
    createdAt: '2026-05-14T08:00:00.000Z',
    questions: [
      {
        name: 'Exercise 1',
        type: 'basic_arithmetic',
        exerciseId: 'basic_arithmetic_01',
        exerciseText: {
          es: 'Calcula 2 + 2.',
          en: 'Calculate 2 + 2.',
        },
      },
    ],
  };
}
