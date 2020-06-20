import { Component, OnInit } from '@angular/core';
import { SampleService } from './core/sample.service';
import { Observable, timer } from 'rxjs';
import { User } from './models/User';
import { map, switchMap } from 'rxjs/operators';
import { LogService } from './core/log.service';

@Component({
  selector: 'nx-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'nx-loader';
  users$: Observable<User[]>;
  logMessage$: Observable<string>;
  routine;
  constructor(
    private sampleService: SampleService,
    private logService: LogService
  ) {}
  ngOnInit(): void {
    setTimeout(() => {
      this.loadData();
    }, 1000);

    this.routine = timer(2000, 10000).pipe(
      switchMap((v) => this.sampleService.loadPhotos())
    );
  }

  loadData = () => {
    this.users$ = this.sampleService.loadUsers().pipe(map((rs) => rs.data));
    this.logMessage$ = this.logService.display();
  };
}
