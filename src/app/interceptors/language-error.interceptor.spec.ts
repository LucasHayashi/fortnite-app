import { TestBed } from '@angular/core/testing';

import { LanguageErrorInterceptor } from './language-error.interceptor';

describe('LanguageErrorInterceptor', () => {
  beforeEach(() => TestBed.configureTestingModule({
    providers: [
      LanguageErrorInterceptor
      ]
  }));

  it('should be created', () => {
    const interceptor: LanguageErrorInterceptor = TestBed.inject(LanguageErrorInterceptor);
    expect(interceptor).toBeTruthy();
  });
});
