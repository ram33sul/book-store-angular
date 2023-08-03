import { Component } from '@angular/core';
import { finalize } from 'rxjs';
import { Book, BooksList } from 'src/app/interfaces/book';
import { BooksService } from 'src/app/services/books.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  booksList: BooksList | null = null;
  loading: boolean = true;

  constructor(private booksService: BooksService) {}

  ngOnInit(){
    this.booksService.getBooksList().pipe(
      finalize(() => {
        this.loading = false
      })
    ).subscribe({
      next: (response: {data: BooksList}) => {
        this.booksList = response.data;
      },
      error: (error) => {
        alert(error.error)
      }
    })
  }


  onSearch(query: string) {
    this.loading= true
    this.booksService.searchBooks(query).subscribe({
      next: (response: {data: BooksList}) => {
        this.booksList = response.data;
      },
      error: (error) => {
        alert(error.error)
      },
      complete: () => {
        this.loading = false;
      }
    })
  }
}
