import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EndorService {

  constructor(private http: HttpClient) { }

 public getPlanetas(): Observable<any> {
    return this.http.get('http://localhost:3000/planetas/6');
  }
}
