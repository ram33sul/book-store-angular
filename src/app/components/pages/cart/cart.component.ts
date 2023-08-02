import { Component } from '@angular/core';
import { Cart } from 'src/app/interfaces/cart';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  constructor(
    private cartService: CartService
  ){}

  loading: boolean = true;
  products: Cart[] = [];

  ngOnInit(){
    this.cartService.getCart().subscribe((response) => {
      this.products = response.data;
    })
  }
}
