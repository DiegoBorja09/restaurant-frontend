import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {
  private apiUrl = 'https://myalb-2088132646.us-east-1.elb.amazonaws.com:3001/orders';

  constructor(private http: HttpClient) {}

  createOrders(quantity: number): Observable<any> {
    const params = new HttpParams().set('quantity', quantity.toString());
    return this.http.get(this.apiUrl, { params });
  }

  getOrderHistory(page: number, limit: number): Observable<any> {
    const params = new HttpParams()
      .set('page', page.toString())
      .set('limit', limit.toString());
    return this.http.get(`${this.apiUrl}/history`, { params });
  }
}

