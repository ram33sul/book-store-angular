import { CurrencyPipe } from '@angular/common';
import { Component, HostListener, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Book } from 'src/app/interfaces/book';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  constructor(private currencyPipe: CurrencyPipe, private router: Router) {}

  id: string = ''

  @HostListener('click') click() {
    this.router.navigate([`book-details/${this.id}`])
  }

  @Input() book!: Partial<Book>;

  ngOnInit() {
    this.id = this.book?.isbn13 ?? '';
    this.book.price = (parseFloat(this.book?.price?.replace('$','') ?? '') * 80).toString()
  }
}
