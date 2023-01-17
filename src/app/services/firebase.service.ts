import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'Origin, X-Requested-With'
  });

  httpOptions = {headers: this.headers_object};

  constructor(private http: HttpClient) {}

  verTodo(estudiante: any) {
    return this.http.get('http://52.87.220.184:8080/heroes', this.httpOptions);
  }
}
