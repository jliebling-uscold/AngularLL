import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LunchLearnAsyncService {
  constructor(private http: HttpClient) {}

  getAHelloFromExpress(): Observable<any> {
    return this.http.get('http://localhost:3000/', { responseType: 'text' });
  }

  getLunchAndLearnData(): Observable<any> {
    return this.http.get('http://localhost:3000/lunch-and-learn');
  }
}
