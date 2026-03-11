import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Fashion } from '../models/fashion';

@Injectable({
  providedIn: 'root',
})
export class FashionApiService {
  private readonly baseUrl = 'http://localhost:4000/api/fashions';

  constructor(private readonly http: HttpClient) {}

  getFashions(style?: string): Observable<Fashion[]> {
    let params = new HttpParams();
    if (style?.trim()) {
      params = params.set('style', style.trim());
    }
    return this.http.get<Fashion[]>(this.baseUrl, { params });
  }

  getStyles(): Observable<string[]> {
    return this.http.get<string[]>(`${this.baseUrl}/styles`);
  }

  getFashionById(id: string): Observable<Fashion> {
    return this.http.get<Fashion>(`${this.baseUrl}/${id}`);
  }
}
