import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  api_url = 'https://api.sampleapis.com/coffee/hot';

  constructor(
    private http: HttpClient
  ) { }

  getData(){
    return this.http.get(this.api_url) as Observable<any[]>
  }

}
