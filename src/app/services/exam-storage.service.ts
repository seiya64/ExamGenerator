import { Injectable } from '@angular/core';
import { GeneratedExam, GeneratedQuestion } from '../models';

const STORAGE_KEY = 'exam-generator:generated-exams:v1';

@Injectable({
  providedIn: 'root',
})
export class ExamStorageService {
  loadAll(): readonly GeneratedExam[] {
    return this.readExams();
  }

  loadById(id: string): GeneratedExam | undefined {
    return this.readExams().find((exam) => exam.id === id);
  }

  save(exam: GeneratedExam): void {
    const exams = this.readExams();
    const existingIndex = exams.findIndex((storedExam) => storedExam.id === exam.id);
    const nextExams =
      existingIndex >= 0
        ? exams.map((storedExam, index) => (index === existingIndex ? exam : storedExam))
        : [exam, ...exams];

    this.writeExams(nextExams);
  }

  deleteById(id: string): void {
    this.writeExams(this.readExams().filter((exam) => exam.id !== id));
  }

  private readExams(): GeneratedExam[] {
    const storedValue = localStorage.getItem(STORAGE_KEY);

    if (!storedValue) {
      return [];
    }

    try {
      const parsedValue: unknown = JSON.parse(storedValue);

      return this.isGeneratedExamList(parsedValue) ? [...parsedValue] : [];
    } catch {
      return [];
    }
  }

  private writeExams(exams: readonly GeneratedExam[]): void {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(exams));
  }

  private isGeneratedExamList(value: unknown): value is readonly GeneratedExam[] {
    return Array.isArray(value) && value.every((exam) => this.isGeneratedExam(exam));
  }

  private isGeneratedExam(value: unknown): value is GeneratedExam {
    if (!this.isRecord(value)) {
      return false;
    }

    return (
      typeof value['id'] === 'string' &&
      typeof value['name'] === 'string' &&
      typeof value['createdAt'] === 'string' &&
      Array.isArray(value['questions']) &&
      value['questions'].every((question) => this.isGeneratedQuestion(question))
    );
  }

  private isGeneratedQuestion(value: unknown): value is GeneratedQuestion {
    if (!this.isRecord(value)) {
      return false;
    }

    const exerciseText = value['exerciseText'];

    return (
      typeof value['name'] === 'string' &&
      typeof value['type'] === 'string' &&
      typeof value['exerciseId'] === 'string' &&
      this.isRecord(exerciseText) &&
      typeof exerciseText['es'] === 'string' &&
      typeof exerciseText['en'] === 'string'
    );
  }

  private isRecord(value: unknown): value is Record<string, unknown> {
    return typeof value === 'object' && value !== null;
  }
}
