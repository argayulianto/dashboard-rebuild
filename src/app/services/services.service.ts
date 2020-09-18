import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';

const httpOptions = {
  headers: new HttpHeaders({ 'X-API-KEY': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9','Content-Type':'application/json'})
};

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  constructor(private http: HttpClient, private config:ConfigService) { }

  getData(link: string): Observable<any> {
    return this.http.get<any>(this.config.api_url + link);
  }
  
  postData(link: string, data: any): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("X-API-KEY","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9");
    return this.http.post<any>(this.config.api_url + link, data,httpOptions);
  }

  postApi(link: string, data: any): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("X-API-KEY","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9");
    return this.http.post<any>(this.config.api_url + link, data,httpOptions);
  }

  postLogin(link: string, data: any): Observable<any> {
    let headers = new HttpHeaders();
    headers.append("X-API-KEY","eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9");
    return this.http.post<any>(this.config.api_login + link, data,httpOptions);
  }
}
