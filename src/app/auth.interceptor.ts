import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, throwError, forkJoin } from 'rxjs';
import { map, catchError, flatMap } from 'rxjs/operators';
import { AuthService } from './auth.service';

@Injectable() export class Interceptor implements HttpInterceptor {
  constructor(
    public authService: AuthService
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return this.authService.getAccessToken()
    .pipe(
      flatMap((access) => {
      if (access) {
        req = req.clone({
          headers: req.headers.set('Authorization', `Bearer ${access}`)
        });
      }
      return next.handle(req)
        .pipe(
          catchError(err => throwError(err))
        );
      })
    );
  }
}
