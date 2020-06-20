import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ApiResponse } from '../models/User';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { delay } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SampleService {
  constructor(private httpClient: HttpClient, private config: ConfigService) {}

  loadUsers = (): Observable<ApiResponse> => {
    return <Observable<ApiResponse>>(
      this.httpClient.get(this.config.reqresConfig.url)
    );
  };

  loadPhotos = (): Observable<any> => {
    return this.httpClient
      .get(this.config.jsonplaceholderConfig.url)
      .pipe(delay(3000));
  };
}
