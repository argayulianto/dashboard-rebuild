import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  api_url:string
  api_login:string

  constructor() {
    let httphost = window.location.protocol;
    if(httphost == "http:"){
      this.api_url = 'http://mufondev.muf.co.id/Public_API/';
      this.api_login= 'http://mufondev.muf.co.id/Public_API/';
    } else if(httphost == "https:"){
      this.api_url = 'https://mufondev.muf.co.id/Public_API/';
      this.api_login= 'https://mufondev.muf.co.id/Public_API/';
    }
   }
}
