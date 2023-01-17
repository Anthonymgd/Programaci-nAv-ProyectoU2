import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  headers_object = new HttpHeaders({
    'Content-Type': 'application/json',
  });

  httpOptions = {
    headers: this.headers_object,
  };

  constructor(private http: HttpClient) {}

  guardarAdministrador(estudiante: any) {
    return this.http.post('http://52.87.220.184:8080/api/addHeroe', {estudiante}, this.httpOptions);
  }
}
