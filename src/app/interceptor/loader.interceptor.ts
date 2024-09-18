import { HttpClient, HttpEvent, HttpHandlerFn, HttpInterceptorFn, HttpRequest } from '@angular/common/http';
import { inject } from '@angular/core';
import { catchError, finalize, Observable, throwError } from 'rxjs';
import { UserServiceService } from '../services/user-service.service';
import { error } from 'console';

export const loaderInterceptor: HttpInterceptorFn = (req: HttpRequest<any>, next: HttpHandlerFn): Observable<HttpEvent<any>> => {
  
  const userService = inject(UserServiceService);
  userService.showSpinner();
  return next(req).pipe(
    catchError(error => {
      console.error('Http Error:', error);
      return throwError(error)
    }),
    finalize(() => userService.hideSpinner())
  );
};
