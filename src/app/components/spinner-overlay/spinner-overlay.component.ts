import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nx-spinner-overlay',
  templateUrl: './spinner-overlay.component.html',
  styleUrls: ['./spinner-overlay.component.scss'],
})
export class SpinnerOverlayComponent implements OnInit {
  showSpinner: boolean = true;
  constructor() {}

  ngOnInit(): void {}
}
