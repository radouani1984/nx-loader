import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { SampleService } from './core/sample.service';
import { ConfigService } from './core/config.service';
import { NxInterceptorInterceptor } from './core/nx-interceptor.interceptor';
import { LogComponent } from './components/log/log.component';
import { UsersComponent } from './components/users/users.component';
import { SpinnerOverlayComponent } from './components/spinner-overlay/spinner-overlay.component';
import { SpinnerOverlayService } from './core/spinner-overlay.service';
import { LogService } from './core/log.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { UrlRepositoryService } from './core/url-repository.service';
import { SpinnerComponent } from './components/spinner/spinner.component';

const customInterceptor = [
  {
    provide: HTTP_INTERCEPTORS,
    useClass: NxInterceptorInterceptor,
    multi: true,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    LogComponent,
    UsersComponent,
    SpinnerOverlayComponent,
    SpinnerComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, OverlayModule],
  providers: [
    SampleService,
    ConfigService,
    SpinnerOverlayService,
    UrlRepositoryService,
    LogService,
    customInterceptor,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
