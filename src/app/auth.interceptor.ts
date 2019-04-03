import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';

import { Observable, throwError } from 'rxjs';
import { catchError, flatMap } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { Router } from '@angular/router';

@Injectable() export class Interceptor implements HttpInterceptor {
  constructor(
    public authService: AuthService,
    public router: Router
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
          catchError((err: HttpErrorResponse) => {
            if (err.status === 401) {
              this.router.navigate(['home']);
            }
            return throwError(err);
          })
        );
      })
    );
  }
}
