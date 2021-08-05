import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../components/shopping/User'
import { Observable } from 'rxjs';
import { Products } from '../components/shopping/Products';

@Injectable({
  providedIn: 'root'
})
export class ShoppingService {
  private apiUrl = '/api';

  constructor(private http: HttpClient) { }

  getUserData(): Observable<User>
  {
    return this.http
    .get<User>(`${this.apiUrl}/user`)
  }

  getProducts(): Observable<Products[]>
  {
    return this.http
    .get<Products[]>(`${this.apiUrl}/products`)
  }

  updateProducts(product: Products): Observable<Products>
  {
    return this.http.post<Products>(
      `${this.apiUrl}/user/addtocart`, product)
  }

}
