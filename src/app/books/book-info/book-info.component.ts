import { Component, OnInit, OnDestroy } from "@angular/core";
import { BooksService } from "../books.service";
import { Book } from "src/app/models/book.model";

@Component({
  selector: "app-book-info",
  templateUrl: "./book-info.component.html",
  styleUrls: ["./book-info.component.scss"]
})
export class BookInfoComponent implements OnInit, OnDestroy {
  lastBook: Book;

  constructor(private bookService: BooksService) {}

  ngOnInit(): void {
    this.bookService.bookSubject.subscribe(
      lastBook => (this.lastBook = lastBook)
    );
  }

  ngOnDestroy(): void {
    this.bookService.bookSubject.unsubscribe();
  }
}
