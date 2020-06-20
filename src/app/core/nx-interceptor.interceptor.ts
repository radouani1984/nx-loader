import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable, Subscription } from 'rxjs';
import { finalize } from 'rxjs/operators';
import { SpinnerOverlayService } from './spinner-overlay.service';
import { UrlRepositoryService } from './url-repository.service';

@Injectable()
export class NxInterceptorInterceptor implements HttpInterceptor {
  constructor(
    private spinnerOverlayService: SpinnerOverlayService,
    private urlRepository: UrlRepositoryService
  ) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let spinnerSubscription: Subscription = undefined;
    if (this.urlRepository.CanLoadSpinner(request.url))
      spinnerSubscription = this.spinnerOverlayService.spinner$.subscribe();
    return next.handle(request).pipe(
      finalize(() => {
        if (spinnerSubscription) spinnerSubscription.unsubscribe();
      })
    );
  }
}
