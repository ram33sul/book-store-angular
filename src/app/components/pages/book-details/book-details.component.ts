import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { Book } from 'src/app/interfaces/book';
import { BooksService } from 'src/app/services/books.service';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {

  constructor(
    private activatedroute: ActivatedRoute,
    private booksService: BooksService,
    private router: Router,
    private cartService: CartService
    ){}

  loading: boolean = true;
  data: Book | null = null;
  isAlreadyInCart: boolean = false;
  buttonLoading: boolean = true;

  ngOnInit() {
    this.activatedroute.params.subscribe((params) => {

      this.booksService.getBookDetails(params['id']).pipe(
        finalize(() => {
          this.loading = false
        })
      ).subscribe({
          next: (response) => {
          this.data = response.data;
        },
        error: (error) => {
          alert(error.error)
        }
      })

      this.cartService.getCart().subscribe((response) => {
        const cart = response.data;
        this.isAlreadyInCart = cart.reduce((acc, curr) => {
          return curr.productId === params['id'] || acc === true
        }, false);
        this.buttonLoading = false;
      })

    })
  }

  handleAddToCart() {
    this.cartService.addToCart(this.data?.isbn13!).subscribe({
      next: () => {
        this.isAlreadyInCart = true
      },
      error: (error) => {
        alert(error.error)
      }
    })
  }

  handleGoBack() {
    this.router.navigate([''])
  }

  handleViewCart() {
    this.router.navigate(['cart'])
  }

}
