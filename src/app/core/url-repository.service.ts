import { Injectable } from '@angular/core';
import * as _ from 'lodash';

@Injectable({
  providedIn: 'root',
})
export class UrlRepositoryService {
  excluded_url = ['https://www.mocky.io/', 'https://www.google.com'];
  CanLoadSpinner(url: string) {
    const exist = _.find(this.excluded_url, (ex_url) =>
      this.startPredicate(ex_url, url)
    );
    return !exist;
  }
  startPredicate = (a, b) => b.startsWith(a);
  constructor() {}
}
