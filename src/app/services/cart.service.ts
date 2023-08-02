import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { API_END_POINT } from 'src/api_endpoints';
import { UserService } from './user.service';
import { Observable } from 'rxjs';
import { Cart } from '../interfaces/cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient, private userService: UserService) { }

  getCart() {
    return this.http.get<{data: Cart[]}>(`${API_END_POINT}/cart/get-cart`)
  }

  addToCart(productId: string) {
    return this.http.post<{data: Cart}>(`${API_END_POINT}/cart/add-to-cart`, {
      productId
    })
  }

  removeFromCart(productId: string) {
    return this.http.delete<{status: boolean}>(`${API_END_POINT}/cart/remove-from-cart`,{
      body: {
        productId
      }
    })
  }

  incrementQuantity(productId: string){
    return this.http.patch<{status: boolean}>(`${API_END_POINT}/cart/increment-quantity`, {
      productId
    })
  }

  decrementQuantity(productId: string){
    return this.http.patch<{status: boolean}>(`${API_END_POINT}/cart/decrement-quantity`, {
      productId
    })
  }

}
