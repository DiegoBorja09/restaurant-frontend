import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class KitchenService {
  private apiUrl = 'http://your-backend-url/kitchen';

  constructor(private http: HttpClient) {}

  prepareOrder(orderId: number): Observable<any> {
    return this.http.post(this.apiUrl + '/prepare', { orderId });
  }
}

