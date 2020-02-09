import { Component, OnInit, OnDestroy } from "@angular/core";
import { BooksService } from "../books.service";
import { Books } from "src/app/models/book.model";
import { last } from "rxjs/operators";

@Component({
  selector: "app-books-list",
  templateUrl: "./books-list.component.html",
  styleUrls: ["./books-list.component.scss"]
})
export class BooksListComponent implements OnInit, OnDestroy {
  books: Books;

  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.bookService
      .getBooks$()
      .subscribe((books: Books) => (this.books = books));
    this.bookService.bookSubject.subscribe(
      book => (this.books = [...this.books, book])
    );
  }
  ngOnDestroy(): void {
    this.bookService.bookSubject.unsubscribe();
  }
}
