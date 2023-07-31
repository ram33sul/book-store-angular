import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_END_POINT } from 'src/api_endpoints';
import { Book, BooksList } from '../interfaces/book';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

  getBooksList(): Observable<{data: BooksList}> {
    return this.http.get<{data: BooksList}>(`${API_END_POINT}/book/books-list`);
  }

  getBookDetails(id: string): Observable<{data: Book}> {
    return this.http.get<{data: Book}>(`${API_END_POINT}/book/book-details/${id}`);
  }

  searchBooks(query: string): Observable<{data: BooksList}> {
    return this.http.get<{data: BooksList}>(`${API_END_POINT}/book/search-books/${query}`)
  }
}
