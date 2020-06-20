import { Component, OnInit, Input } from '@angular/core';
import { LogService } from 'src/app/core/log.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'nx-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {
  @Input() message: string;
  constructor() {}

  ngOnInit(): void {}
}
