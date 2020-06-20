import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  messages: string[] = [];
  displaySubject: BehaviorSubject<string> = new BehaviorSubject(
    'Program Started'
  );
  constructor() {}

  add = (msg) => {
    this.messages.push(msg);
    this.displaySubject.next(msg);
  };
  display = (): Observable<string> =>
    this.displaySubject.pipe(map((v) => this.messages.pop()));
}
