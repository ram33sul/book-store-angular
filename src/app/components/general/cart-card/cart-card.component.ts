import { Component, Input } from '@angular/core';
import { Book } from 'src/app/interfaces/book';
import { Cart } from 'src/app/interfaces/cart';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-cart-card',
  templateUrl: './cart-card.component.html',
  styleUrls: ['./cart-card.component.css']
})
export class CartCardComponent {

  @Input() product: Cart | null = null;

  book: Book | null = null;

  constructor(
    private bookService: BooksService
  ) {}

  ngOnInit() {
    this.bookService.getBookDetails(this.product?.productId!).subscribe((response) => {
      this.book = response.data;
    })
  }
}
