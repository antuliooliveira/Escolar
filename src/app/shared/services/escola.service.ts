import { Injectable } from '@angular/core';
import { Escola } from '../model/escola';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, delay } from 'rxjs/operators';
import { HttpResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class EscolaService {

  constructor(private http: HttpClient) { }

  getBaseUrl(): string {
    return 'http://localhost:3000/api/escolas';
  }

  listar(): Observable<Escola[]> {
    return this.http.get<Escola[]> (this.getBaseUrl())
     .pipe(
       map(escolas => escolas.map(e => Object.assign(new Escola(), e)))
    );
  }

  buscar(id: string): Observable<Escola> {
    return this.http.get<Escola> (this.getBaseUrl() + '/' + id);
  }

  gravar (escola: Escola): Observable<HttpResponse<string>> {
    return this.http.put (this.getBaseUrl(), escola, {observe: 'response', responseType: 'text'});
  }

  incluir (escola: Escola): Observable<HttpResponse<string>> {
    return this.http.post (this.getBaseUrl(), escola, {observe: 'response', responseType: 'text'});
  }

  remover(id: number): Observable<HttpResponse<string>> {

    return this.http.delete (this.getBaseUrl() + '/' + id, {observe: 'response', responseType: 'text'});
  }
}
