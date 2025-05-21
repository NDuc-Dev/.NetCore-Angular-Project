import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Pagination } from '../../shared/models/pagiantion';
import { Product } from '../../shared/models/product';

@Injectable({
  providedIn: 'root'
})
export class ShopService {
  baseUrl = 'https://localhost:5001/api/'
  private http = inject(HttpClient);
  type: String[] = [];
  brand: String[] = [];

  getProducts() {
    return this.http.get<Pagination<Product>>(this.baseUrl + 'products?pagesize=20')
  }

  getBrands() {
    if (this.brand.length > 0) return this.brand;
    return this.http.get<string[]>(this.baseUrl + 'products/brands').subscribe({
      next: response => this.brand = response,
    })
  }
  geTypes() {
    if (this.type.length > 0) return this.type;
    return this.http.get<string[]>(this.baseUrl + 'products/type').subscribe({
      next: response => this.type = response,
    })
  }
}
