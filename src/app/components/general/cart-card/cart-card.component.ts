import { CurrencyPipe } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { Cart } from 'src/app/interfaces/cart';
import { BooksService } from 'src/app/services/books.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})
export class CartCardComponent {

  @Input() product!: Cart;
  @Output() onRemove = new EventEmitter;

  book: Book | null = null;
  loading: boolean = true;

  constructor(
    private bookService: BooksService,
    private cartService: CartService,
    private currencyPipe: CurrencyPipe,
  ) {}

  ngOnInit() {
    this.bookService.getBookDetails(this.product.productId).subscribe({
      next: (response) => {
        this.book = response.data;
        this.loading = false;
        this.book.price = (parseFloat(this.book?.price?.replace('$','') ?? '') * 80).toString()
      },
      error: (error) => {
        alert(error.error)
        this.loading = false;
      }
    })
  }

  handleRemove() {
    this.onRemove.emit()
  }

  handleIncrement() {
    if(this.product.quantity >= 9) return alert("Maximum limit reached")
    this.cartService.incrementQuantity(this.product.productId).subscribe({
      next: (response) => {
        this.product.quantity += 1
      },
      error: (error) => {
        alert(error.error)
      }
    })
  }

  handleDecrement() {
    if(this.product.quantity <= 1) return this.handleRemove();
    this.cartService.decrementQuantity(this.product.productId).subscribe({
      next: (response) => {
        this.product.quantity -= 1;
      },
      error: (error) => {
        alert(error.error)
      }
    })
  }
}
