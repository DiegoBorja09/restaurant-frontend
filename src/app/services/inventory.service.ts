import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InventoryService {
  private apiUrl = 'http://ec2-54-198-251-106.compute-1.amazonaws.com:3003/inventory';

  constructor(private http: HttpClient) {}

  getIngredients(): Observable<any> {
    return this.http.get(`${this.apiUrl}/ingredients`);
  }

  getPurchaseHistory(page: number, limit: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());
    return this.http.get(`${this.apiUrl}/purchase`, { params });
  }
}


