import { routes } from './app.routes';

describe('routes', () => {
  it('should route /exams to the exams placeholder', () => {
    expect(routes.some((route) => route.path === 'exams' && route.component)).toBe(true);
  });

  it('should redirect empty and unknown paths to /exams', () => {
    expect(routes).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ path: '', pathMatch: 'full', redirectTo: 'exams' }),
        expect.objectContaining({ path: '**', redirectTo: 'exams' }),
      ]),
    );
  });
});
