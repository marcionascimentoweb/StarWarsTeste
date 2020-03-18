import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AlderaanService  {

  private url = "http://localhost:3000/planetas/1";

    constructor(private http: HttpClient) { }

    public getPlanetas(): Observable<any> {
      return this.http.get(`http://localhost:3000/planetas/1`);
    }

}
