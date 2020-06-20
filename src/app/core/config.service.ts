import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ConfigService {
  constructor() {}

  public reqresConfig = {
    url: 'https://reqres.in/api/users?delay=45',
  };
  public jsonplaceholderConfig = {
    url: 'https://www.mocky.io/v2/5185415ba171ea3a00704eed?mocky-delay=5s',
  };
}
