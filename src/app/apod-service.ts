import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IAPOD } from './interfaces/IApod';

@Injectable({
  providedIn: 'root'
})
export class ApodService {
  private apiKey = 'vIwLftweKsZuJih7bickfdRBahAh6gyuVgfQq0y6';
  private urlBase = 'https://api.nasa.gov/planetary/apod';

  constructor(private http: HttpClient) {}

  getApods(date?: string, start_date?: string, end_date?: string, count?: number): Observable<IAPOD[]> {
    let params = new HttpParams().set('api_key', this.apiKey);

    if (date) params = params.set('date', date);
    if (start_date) params = params.set('start_date', start_date);
    if (end_date) params = params.set('end_date', end_date);
    if (count) params = params.set('count', count.toString());

    return this.http.get<IAPOD[]>(this.urlBase, { params });
  }
}