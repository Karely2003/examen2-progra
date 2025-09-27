import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IApod } from './interfaces/IApod';

@Injectable({
  providedIn: 'root'
})
export class ApodService {
  private baseUrl = 'https://api.nasa.gov/planetary/apod';
  private apiKey = 'vIwLftweKsZuJih7bickfdRBahAh6gyuVgfQq0y6';

  constructor(private http: HttpClient) {}

  getApods(params?: { date?: string; start_date?: string; end_date?: string; count?: number }): Observable<IApod[]> {
    let query = new HttpParams().set('api_key', this.apiKey);
    if (params?.date) query = query.set('date', params.date);
    if (params?.start_date) query = query.set('start_date', params.start_date);
    if (params?.end_date) query = query.set('end_date', params.end_date);
    if (params?.count) query = query.set('count', params.count.toString());

    return this.http.get<IApod[]>(this.baseUrl, { params: query });
  }

  getApod(date: string): Observable<IApod> {
    const query = new HttpParams().set('api_key', this.apiKey).set('date', date);
    return this.http.get<IApod>(this.baseUrl, { params: query });
  }
}
