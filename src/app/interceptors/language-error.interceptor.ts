import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';
import { SnackbarService } from '../services/snackbar.service';
import { LanguageService } from '../services/language.service';

@Injectable()
export class LanguageErrorInterceptor implements HttpInterceptor {
  constructor(
    private _snackbarService: SnackbarService,
    private _languageService: LanguageService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (
          error.status === 400 &&
          error.error &&
          error.error.error &&
          error.error.error.includes('the requested language was not found')
        ) {
          this._snackbarService.openSnackBar(
            'O idioma solicitado não está disponível no momento.'
          );
          this._languageService.setLanguage('en');

          const newRequest = request.clone({
            setParams: {
              language: 'en',
            },
          });

          return next.handle(newRequest);
        }
        return throwError(() => error);
      })
    );
  }
}
