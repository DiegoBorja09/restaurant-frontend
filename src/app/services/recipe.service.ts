// src/app/services/recipe.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {
  private apiUrl = 'http://ec2-54-198-251-106.compute-1.amazonaws.com:3002/kitchen/recipes';

  constructor(private http: HttpClient) {}

  getRecipes(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}