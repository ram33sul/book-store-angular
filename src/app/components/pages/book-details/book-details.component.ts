import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs';
import { Book } from 'src/app/interfaces/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent {

  constructor(private activatedroute: ActivatedRoute, private booksService: BooksService, private router: Router){}

  loading: boolean = true;
  data: Book | null = null;

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
    })
  }

  handleAddToCart() {
    alert("hi")
  }

  handleGoBack() {
    this.router.navigate([''])
  }

}
