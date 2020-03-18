import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class KaminoService {

  constructor(private http: HttpClient) { }

  public getPlanetas(): Observable<any> {
    return this.http.get('http://localhost:3000/planetas/9');
  }
}
